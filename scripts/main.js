chrome.runtime.onInstalled.addListener(function () {
    var context = "selection";
    var title = "Mathemorphosize";
    var id = chrome.contextMenus.create({title: title,
                                         contexts: [context],
                                         id: "context" + context});
});

function receiveMouseLoc() {
  chrome.runtime.onMessage.addListener(function(message, sender, send_response){
    if(message.mouse_loc){
        alert(message);
        console.log(message);
    }
  }); 
}

function onClickHandler(e) {
    mouse_data = receiveMouseLoc();
    console.assert(mouse_data !== null); 
    var sel_text = e.selectionText;
    popup("../popup.html", e);
}

function popup(url, e) {
    chrome.windows.create({'url': url, 'type': 'panel', 'height': 125, 'width': 300, 'top': 130, 'left': 750}, function(newWindow) {
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
        }, 100);
    });
}
chrome.contextMenus.onClicked.addListener(onClickHandler);
