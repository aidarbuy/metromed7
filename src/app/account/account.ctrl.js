class LoginController {
	constructor (Auth, $location, $window) {
		'ngInject';

		var self = this;
		var authData = {};

		Auth.$onAuth(function(data){

			if (data) {
				authData = data;
				// var str = JSON.stringify(authData, null, 2);
				// $window.console.log(str);
				self.name = authData.facebook.displayName;
				self.img = authData.facebook.cachedUserProfile.picture.data.url;
			}

		});

		this.logout = function() {
			Auth.$unauth();
			$location.url('/login');
		};

	}
}

export default LoginController;