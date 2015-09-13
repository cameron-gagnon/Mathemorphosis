window.onload = function() {
    setTimeout( function(){
        document.getElementById('submit').onclick = function() {
            var vals_to_format = document.getElementById('userinput').value;
            chrome.tabs.create({url: '../popup.html?=' + vals_to_format}, function (callback) {
               console.log(callback);
            });
        }
    }, 1000);
}
        
data.document.getElementById("highlighted").innerHTML = '<img src="https://chart.googleapis.com/chart?cht=tx&<290>x<height>&chl=' + encodeURIComponent(e.selectionText) + '"/>';
 
