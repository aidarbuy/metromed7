class LoginController {
	constructor (Auth, $window, $location) {
		'ngInject';


		this.login = function(method) {

			var self = this;

			Auth.$authWithOAuthPopup(method)
			.then(function(authData) {
				self.authData = authData;
				$window.console.log('Logged in successfully');
				$location.url('/account');
			})
			.catch(function(error) {
				$window.console.log(error);
			});

		};


	}
}

export default LoginController;