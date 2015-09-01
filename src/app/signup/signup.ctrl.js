class SignupController {
	constructor ($window, $firebaseObject, MedicalSchool) {
		'ngInject';

		$window.console.log('SignupController');

		var ref = new Firebase("https://metromeduc.firebaseio.com/articles");
		var obj = $firebaseObject(ref);

		var self = this;


		// Get article
		this.getArticle = function () {
			obj.$loaded(
				function(data) {
					$window.console.log(data === obj);
					self.article = data.testArticle;
				},
				function(error) {
					$window.console.error("Error:", error);
				}
			);
		};


		// Save a new article
		this.saveNewArticle = function () {
			obj.testArticle = {
				header: MedicalSchool[0].header,
				text: MedicalSchool[0].text,
				img: MedicalSchool[0].img,
				date: MedicalSchool[0].date
			};

			obj.$save().then(function(ref) {
			  ref.key() === obj.$id; // true
			  $window.console.log("Saved new article");
			}, function(error) {
			  console.log("Error:", error);
			});
		};


		// Create a new user account
		this.createNewUserAccount = function() {
			ref.createUser({
			  email: "rbeckwi11@gmail.com",
			  password: "Temirbulat30"
			}, function(error, userData) {
			  if (error) {
			    $window.console.log("Error creating user:", error);
			  } else {
			    $window.console.log("Successfully created user account with uid:", userData.uid);
			  }
			});
		};

	}
}

export default SignupController;