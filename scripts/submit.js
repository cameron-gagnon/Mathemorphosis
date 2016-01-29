setTimeout(function() {
        var button = document.getElementById("submit");
        button.addEventListener("click", 
                                function(e, button) {submitData(e, button)},
                                false);
}, 500);

function submitData(e, button){
    user_input = document.getElementById("userinput").value;
    if (user_input === '') {
		return;
	} else {
        var img_tab = '<img src="https://chart.googleapis.com/chart?cht=tx&chl='
                      + encodeURIComponent(user_input) + '"/>';
        document.getElementById("img_area").innerHTML = img_tab;
        document.getElementById("prompt").innerHTML = "Your transformed " + 
                                                      "expression:";
    }
}
