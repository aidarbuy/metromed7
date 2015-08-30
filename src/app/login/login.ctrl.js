class LoginController {
	constructor (Firebase, $window, Auth, $scope) {
		'ngInject';

		// Retrieve current auth state
		// var authData = Auth.$getAuth();
		// if (authData) {
			// console.log("Logged in as: ", authData.uid);
			// this.authData = authData;
		// } else {
			// console.log("Logged out");
		// }
	}
}

export default LoginController;