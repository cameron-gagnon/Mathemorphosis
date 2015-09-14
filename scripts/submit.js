setTimeout(function() {
    var button = document.getElementById("submit");
    button.addEventListener("click", function() {sendRequest(button)}, false);
}, 500);

function sendRequest(e, button) {
    if (document.getElementById("userinput").value == ''){
        alert("Nothing entered"); 
    } else {
        document.getElementById("area").innerHTML = '<img src="https://chart.googleapis.com/chart?cht=tx&chl=' + encodeURIComponent(document.getElementById("userinput").value) + '"/>';
        document.getElementById("prompt").innerHTML = "Here is your expression:";
        consolve.log(button);
    }
}
