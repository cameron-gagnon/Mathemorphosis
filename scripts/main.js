chrome.runtime.onInstalled.addListener(function () {
    var context = "selection";
    var title = "Mathemorphosize";
    var id = chrome.contextMenus.create({title: title,
                                         contexts: [context],
                                         id: "context" + context});
});


function onClickHandler(e) {
<<<<<<< HEAD
    console.log(e);
=======
    var pop = popup("../popup.html");
>>>>>>> 83a2913af3593fb7a4b66f560a29015a8901ec58
    var sel_text = e.selectionText;
    var jax;
    // Does not access the document so MathJax is not doing anything
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "math"],
            function () {jax = MathJax.Hub.getAllJax("math")[0]
    });

<<<<<<< HEAD
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, "preview"]);
//,
//            function () {jax = MathJax.Hub.getAllJax("preview")[0]
//    });
/*    MathJax.Hub.Queue(["Text", jax, sel_text]);*/
    popup("../index.html", e);
}

function popup(url, e) {
    chrome.windows.create({'url': url, 'type': 'panel', 'height': 260, 'width': 300, 'top': 150, 'left': 300}, function(newWindow) {
        var windows = chrome.extension.getViews();
        for(var i in windows) {
            if(windows[i].location.pathname == "/index.html") {
                windows[i].setTimeout(function() {
                    windows[i].document.getElementById("userinput").value = e.selectionText;
                }, 1000);
            }
        }
    });
=======
    MathJax.Hub.Queue(["Text", jax, sel_text]);
    popup("../popup.html");
}

function popup(url) {
    return window.open(url, "window", "width=300,height=260,top=150, left=300,status=yes");
>>>>>>> 83a2913af3593fb7a4b66f560a29015a8901ec58
}


chrome.contextMenus.onClicked.addListener(onClickHandler);