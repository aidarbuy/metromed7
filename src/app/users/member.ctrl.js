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

				switch(authData.provider){
					case "facebook": 
						self.name = authData.facebook.displayName;
						self.img = authData.facebook.cachedUserProfile.picture.data.url;
						break;
					case "google": 
						self.name = authData.google.displayName;
						self.img = authData.google.cachedUserProfile.picture;
						break;
					case "twitter": 
						self.name = authData.twitter.displayName;
						self.img = authData.twitter.profileImageURL;
						break;
					case "password": 
						self.name = authData.password.email;
						self.img = authData.password.profileImageURL;
						break;
				}
			}
		});

		this.logout = function() {
			Auth.$unauth();
			$location.url('/login');
		};

		this.delete = function() {
			Auth.$removeUser({
				email: self.name,
				password: "mypassword"
			}).then(function() {
				$window.console.log("User removed successfully!");
			}).catch(function(error) {
				$window.console.error("Error: ", error);
			});
		};
	}
}

export default LoginController;
