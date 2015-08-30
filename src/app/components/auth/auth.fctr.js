class AuthFactory {
	constructor ($firebaseAuth) {
		'ngInject';

		var ref = new Firebase("https://metromeduc.firebaseio.com");
		return $firebaseAuth(ref);
	}
}

export default AuthFactory;