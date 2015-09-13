document.onmousedown = function (event){
    var x = event.pageX,
        y = event.pageY;
    chrome.runtime.sendMessage({"mouse_loc": [x,y]});
}

chrome.runtime.onMessage.addListener(function(message, sender, send_response){
    if(message.mouse_loc){
        console.log(message);
        alert("within if statement!!");
    }
    
    send_response({"mouse_loc": document.onmousemove});
}); 


//chrome.runtime.sendMessage({"mouse_loc": document.onmousemove});
