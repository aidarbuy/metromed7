class LoginController {
	constructor ($log, $http, $scope, $firebaseAuth) {
		'ngInject';
		/*global Firebase */

		// Reference a Firebase
		var refFirebase = new Firebase('https://metromeduc.firebaseio.com/');

		// Instantiate an authorization object
		var authObject = $firebaseAuth(refFirebase);

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
		authObject.$onAuth(function (authData) {
			$scope.authData = authData;
			if (authData) {
				getRepos();
			}
			// $log.log(authData);
		});

		// Login
		this.login = function () {
			authObject.$authWithOAuthPopup('email')
			.catch(function (error) {
				$log.error(error);
			});
		};

		// Logout
		this.logout = function () {
			authObject.$unauth();
		};

		// Sending Password Reset Emails
		// authObject.$resetPassword({
		// 	email: "aidarbuy@gmail.com"
		// }).then(function () {
		// 	$log.info("Password reset email sent successfully");
		// }).catch(function (error) {
		// 	$log.error("Error sending password reset email: "), error;
		// });

		// Get repositories
		function getRepos () {
			$http.get($scope.authData.github.cachedUserProfile.repos_url)
			.success(function (repos) {
				$scope.repos = repos;
			})
			.error(function (error) {
				$log.error(error);
			});
		}
	}
}

export default LoginController;