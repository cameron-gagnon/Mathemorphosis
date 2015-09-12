window.onload = function(){
    chrome.contextMenus.create({
        id: "stringToTex",
        title: "Mathemorphosize",
        contexts: ["launcher", "all"],
        onclick: contextClicked(
    }, function(){
        console.log(chrome.runtime.lastError);
    });

    chrome.contextMenus.onClicked.addListener(contextClicked.bind(this));
};

function contextClicked(e){
    console.log(e.menuItemId);
}
