class LoginController {
	constructor ($firebaseAuth, $scope) {
		'ngInject';

		// Reference a Firebase
		var ref = new Firebase('https://metromeduc.firebaseio.com/');

		// Instantiate an authorization object
		var auth = $firebaseAuth(ref);

		// Retrieve current auth state
		var authData = auth.$getAuth();
		if (authData) {
			// console.log("Logged in as: ", authData.uid);
			this.authData = authData;
		} else {
			// console.log("Logged out");
		}

		// Login function
		this.login = function(method) {
			$scope.authData = null;
			$scope.error = null;

			auth.$authWithOAuthPopup(method).then(function(authData) {
				console.info(authData);
				$scope.authData = authData;
			}).catch(function (error) {
				console.error(error);
				$scope.error = error;
			});
		};

		// Create an user
		// authObject.$createUser({
		// 	email: "aidarbuy@gmail.com",
		// 	password: "GfHjKm"
		// }).then(function (userData) {
		// 	$log.info("Successfully created user account with uid: ", userData.uid);
		// }).catch(function (error) {
		// 	$log.error("Error creating user: ", error);
		// });

		// Check authentication
		// authObject.$onAuth(function (authData) {
		// 	$scope.authData = authData;
		// 	if (authData) {
		// 		getRepos();
		// 	}
			// $log.log(authData);
		// });

		// Logout
		// this.logout = function () {
		// 	authObject.$unauth();
		// };

		// Sending Password Reset Emails
		// authObject.$resetPassword({
		// 	email: "aidarbuy@gmail.com"
		// }).then(function () {
		// 	$log.info("Password reset email sent successfully");
		// }).catch(function (error) {
		// 	$log.error("Error sending password reset email: "), error;
		// });

		// Get repositories
		// function getRepos () {
		// 	$http.get($scope.authData.github.cachedUserProfile.repos_url)
		// 	.success(function (repos) {
		// 		$scope.repos = repos;
		// 	})
		// 	.error(function (error) {
		// 		$log.error(error);
		// 	});
		// }
	}
}

export default LoginController;