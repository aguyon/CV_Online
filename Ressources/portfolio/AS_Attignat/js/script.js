function toggleMenu() {
	if(document.getElementById('mobileNavContent').style.display == 'block') {
		document.getElementById('mobileNavContent').style.display = 'none';
	} else {
		document.getElementById('mobileNavContent').style.display = 'block';
	}
}

function displayLogin() {
	if($('#login-box').css('display') == 'none') {
		$('#login-box').show("slow");
	} else {
		$('#login-box').hide("slow");
	}
}