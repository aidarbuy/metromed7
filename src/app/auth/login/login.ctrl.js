class LoginController {
	constructor (Auth, $window, $location) {
		'ngInject';

		this.login = function(method) {
			var self = this;
			Auth.$authWithOAuthPopup(method).then(function(authData) {
				$window.console.info('Logged in to ' + capitalizeFirstLetter(method));
				self.authData = authData;
				// $window.console.log("authData:\n" + self.authData);
				$location.url('/profile');
			}).catch(function(error) {
				$window.console.log(error);
			});
		};

		this.signin = function(email, password) {
			Auth.$authWithPassword({
				email: email,
				password: password
			}).then(function(authData) {
				$window.console.info("Logged in as: ", authData.uid);
				$window.console.log("authData:\n" + authData);
				$location.url('/profile');
			}).catch(function(error) {
				$window.console.error("Authentication failed: ", error);
			});
		};

		function capitalizeFirstLetter(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
	}
}

export default LoginController;