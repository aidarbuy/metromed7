class AuthController {
	constructor (Auth, $window, $scope) {
		'ngInject';

		Auth.$onAuth(function(authData){
			$scope.authData = authData;
			$window.console.log(authData);
		});

		this.login = function() {
			Auth.$authWithOAuthPopup(method)
			.catch(function(error) {
				$window.console.log(error);
			});
		};

		this.logout = function() {
			Auth.$unauth();
		};
	}
}

export default AuthController;