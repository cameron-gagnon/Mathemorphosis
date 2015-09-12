"use strict";
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
    MathJax.Hub.Queue(
        ["Typeset", MathJax.Hub, "preview"],
            function () {jax = MathJax.Hub.getAllJax("preview")[0]}
    );
    MathJax.Hub.Queue(["Text", jax, sel_text]);
    popup("../popup.html");
}

function popup(url) {
    window.open(url, "window", "width=300,height=260,top=150, left=300,status=yes");
}

chrome.contextMenus.onClicked.addListener(onClickHandler);
