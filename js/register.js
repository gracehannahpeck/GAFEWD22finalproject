$(document).ready(function() {

	$('#registrationForm').submit(processForm);

	function processForm(event) {
		event.preventDefault();

		var username = $('input[name="username"]').val();
		var password = $('input[name="password"]').val();
		var emailAddress = $('input[name="emailAddress"]').val();
		var zipcode = $('input[name="zipcode"]').val();
		var interests = $('input[name="interests"]:checked').length;

		if (username === '') {
			$('#errorMessage')
				.html('Please enter a username')
				.removeClass('hide');
		//} else if (password.length < 8) {
		//		$('#errorMessage')
		//			.html('Password must be at least 8 characters');
		//			.removeClass('hide');
		//} else if (emailAddress).indexOf('@') === -1 ) {
		//		$('#errorMessage')
		//			.html('Please enter a valid email address');
		//			.removeClass('hide');
			//}
	}

});