chrome.runtime.onInstalled.addListener(function () {
    var context = "selection";
    var title = "Mathemorphosize";
    var id = chrome.contextMenus.create({title: title,
                                         contexts: [context],
                                         id: "context" + context});
});


function requestMouseLoc() {
  chrome.runtime.sendMessage({greeting: "mouse_loc"}, function(response){
    return response; 
  }); 
}

function get_mouse() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "mouse_loc"}, function(response) {
        console.log(response); 
        return response;
      });
    });
};

function onClickHandler(e) {
    mouse_data = get_mouse();
    var sel_text = e.selectionText;
    var pop = popup("../popup.html", e, mouse_data);
}


function popup(url, e, mouse_data) {
    console.log(e);
    console.log(mouse_data);
    chrome.windows.create({'url': url, 'type': 'panel', 'height': 100, 'width': 300, 'top': 550, 'left': 300}, function(newWindow) {
        setTimeout(function () { 
            var windows = chrome.extension.getViews();
            var found = false;
            windows.forEach(function(data, elem) {
                if (data.location.pathname == "/popup.html" && !found) {
                    found = true;
                    data.document.getElementById("highlighted").innerHTML = '<img src="https://chart.googleapis.com/chart?cht=tx&<290>x<height>&chl=' + encodeURIComponent(e.selectionText) + '"/>';
                    data.focus();
                } else {
                    data.close();
                }
            });
        }, 25);
    });
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
