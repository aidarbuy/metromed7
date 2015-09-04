class AuthFactory {
	constructor ($firebaseAuth) {
		'ngInject';

		var ref = new Firebase("https://metromeduc.firebaseio.com");
		/*
			$firebaseAuth(ref) = {
				$authAnonymously: function () {}: function () {},
				$authWithCustomToken: function () {},
				$authWithOAuthPopup: function () {},
				$authWithOAuthRedirect: function () {},
				$authWithOAuthToken: function () {},
				$authWithPassword: function () {},
				$changeEmail: function () {},
				$changePassword: function () {},
				$createUser: function () {},
				$getAuth: function () {},
				$onAuth: function () {},
				$removeUser: function () {},
				$requireAuth: function () {},
				$resetPassword: function () {},
				$unauth: function () {},
				$waitForAuth: function () {}
			}
		*/
		return $firebaseAuth(ref);
	}
}

export default AuthFactory;