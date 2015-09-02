class LoginController {
	constructor ($scope, Auth, $location, $window, Member) {
		'ngInject';

		// put our profile in the scope for use in DOM
		$scope.memberProfile = Member("roshellebeckwith");

		// calling $save() on the synchronized object syncs all data back to our database
		this.saveMember = function() {
			$scope.memberProfile.$save().then(function() {
				alert('Member profile saved!');
			}).catch(function(error) {
				alert('Error!');
			});
		};

		this.saveMember();

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
