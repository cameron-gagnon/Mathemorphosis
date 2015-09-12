chrome.runtime.onInstalled.addListener(function () {
    var context = "selection";
    var title = "Mathemorphosize";
    var id = chrome.contextMenus.create({title: title,
                                         contexts: [context],
                                         id: "context" + context});
});


function onClickHandler(e) {
    var sel_text = e.selectionText;
    var jax;
    // Does not access the document so MathJax is not doing anything
    var pop = popup("../popup.html", e);
}

function popup(url, e) {
    chrome.windows.create({'url': url, 'type': 'panel', 'height': 260, 'width': 300, 'top': 150, 'left': 300}, function(newWindow) {
        var windows = chrome.extension.getViews();
        for(var i in windows) {
            if(windows[i].location.pathname == "/popup.html") {
                windows[i].document.getElementById("highlighted").innerHTML = '<img src="https://chart.googleapis.com/chart?cht=tx&chl=' + encodeURIComponent(e.selectionText) + '"/>';
            }
        }
    });
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
