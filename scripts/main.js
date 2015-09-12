"use strict";
chrome.runtime.onInstalled.addListener(function () {
    var context = "selection";
    var title = "Mathemorphosize";
    var id = chrome.contextMenus.create({title: title,
                                         contexts: [context],
                                         id: "context" + context});
});


function onClickHandler(info) {
    var sText = info.selectionText;
    var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);
    window.open(url, '_blank');
    console.log("Opening url " + url);
}

chrome.contextMenus.onClicked.addListener(onClickHandler);

/*"use strict"
chrome.runtime.onInstalled.addListener(function (){
    var context = "selection";
    var title = "Mathemorphosize";
    var id = chrome.contextMenus.create({"title": title,
                                         "contexts": [context],
                                         "id": "context" + context});
});

chrome.contextMenus.onClicked.addListener(onClickHandler);

function onClickHandler(info, tab){
    var sText = info.selectionText;
    var url = "https://www.google.com/search?q=" + encodeURIComponent(sText);
    window.open(url, '_blank');
    console.log("Opening url " + url);
}*/
