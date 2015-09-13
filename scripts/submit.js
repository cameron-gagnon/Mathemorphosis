setTimeout(function() {
    var button = document.getElementById("submit");
<<<<<<< HEAD
    if (document.getElementById("userinput").value == '')
		return;
=======
    if (document.getElementById("userinput").value == '') {
		//document.getElementById("userinput").focus();
		break;
	}
>>>>>>> 097d741af0510f6e40fe0dad0480ac9365d933b6
    button.addEventListener("click", function() {
        document.getElementById("area").innerHTML = '<img src="https://chart.googleapis.com/chart?cht=tx&<290>x<height>&chl=' + encodeURIComponent(document.getElementById("userinput").value) + '"/>';
        document.getElementById("prompt").innerHTML = "Here is your expression:";
        button.remove();
    }, false);
         
}, 500);
