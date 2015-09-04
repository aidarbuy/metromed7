class ProfileController {
	constructor (Auth, Profile, $location, $window, $scope) {
		'ngInject';

		Auth.$onAuth(function(data){
			if (data) {
				$scope.authData = data; // var str = JSON.stringify($scope.authData, null, 2);
				switch($scope.authData.provider){
					case "facebook":
						// facebook:1001653403202639
						$scope.name = $scope.authData.facebook.displayName;
						$scope.img = $scope.authData.facebook.cachedUserProfile.picture.data.url;
						break;
					case "google": 
						// google:112890417273364086537
						$scope.name = $scope.authData.google.displayName;
						$scope.img = $scope.authData.google.cachedUserProfile.picture;
						break;
					case "twitter": 
						// twitter:314925073
						$scope.name = $scope.authData.twitter.displayName;
						$scope.img = $scope.authData.twitter.profileImageURL;
						break;
					case "password": 
						// e12383d9-e389-40c8-9852-153fe093d8f1
						var profile = Profile($scope.authData.uid);
						$scope.img = $scope.authData.password.profileImageURL;
						profile.type = "employee";
						profile.firstname = "Roshelle";
						profile.lastname = "Beckwith";
						profile.gender = "female";
						profile.birthdate = "11 March 1989";
						profile.bloodGroup = "AB+";
						profile.weight = 138;
						profile.height = 5.8;
						profile.timezone = -5;
						profile.locale = "en_US";
						profile.phone = 12403572818;
						profile.address = '615, Glenbrook Dr';
						profile.city = "Middletown";
						profile.state = "MD";
						profile.email = "rbeckwi1@gmail.com";
						profile.createdDate = '4 Sep 2015';
						// $scope.profile.$save().then(function(ref) {
						// 	$scope.profile = ref;
						// }, function(error) {
						// 	console.error("Error: ", error);
						// });
						profile.$loaded()
							.then(function(data) {
								$scope.name = data.firstname;
							})
							.catch(function(error) {
								console.error("Error:", error);
							});
						break;
				}
			}
		});

		// calling $save() on the synchronized object syncs all data back to our database
		this.saveProfile = function() {
			$scope.profile.$save().then(function() {
				alert('Profile saved!');
			}).catch(function(error) {
				alert('Error!');
			});
		};

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

export default ProfileController;