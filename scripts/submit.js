setTimeout(function() {
    var button = document.getElementById("submit");
    button.addEventListener("click", function() {
        document.getElementById("area").innerHTML = '<img src="https://chart.googleapis.com/chart?cht=tx&<290>x<height>&chl=' + encodeURIComponent(document.getElementById("userinput").value) + '"/>';
        document.getElementById("prompt").innerHTML = "Here is your expression:";
    }, false);
}, 500);
