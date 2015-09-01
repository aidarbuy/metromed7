class SignupController {
	constructor ($window) {
		'ngInject';

		$window.console.log('SignupController');

		var ref = new Firebase("https://metromeduc.firebaseio.com");

		// Create a new user account
		this.createNewUserAccount = function() {
			ref.createUser({
			  email: "rbeckwi11@gmail.com",
			  password: "Temirbulat30"
			}, function(error, userData) {
			  if (error) {
			    $window.console.log("Error creating user:", error);
			  } else {
			    $window.console.log("Successfully created user account with uid:", userData.uid);
			  }
			});
		};

	}
}

export default SignupController;