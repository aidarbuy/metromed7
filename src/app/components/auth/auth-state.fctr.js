class AuthStateFactory {
	constructor () {
		'ngInject';


		var self = this;

		Auth.$onAuth(function(authData) {
			self.authData = authData;
			// $window.console.log(self.authData);
		});

		this.toggleSidenav = function (navID) {
			$mdSidenav(navID).toggle();
		};


		return {
			getAuthData: function() {
				return this.authData;
			},

			setAuthData: function(data) {
				this.authData = data;
			}
		};
	}
}

export default AuthStateFactory;