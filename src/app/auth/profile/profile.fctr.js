class ProfileFactory {
	constructor ($firebaseObject) {
		'ngInject';

		return function(uid) {
			// create a reference to the database node where we will store our data
			// var randomID = Math.round(Math.random() * 100000000);
			var profilesRef = new Firebase('https://metromeduc.firebaseio.com/').child('profiles');
			var profileRef = profilesRef.child(uid);

			// return it as a synchronized object
			return $firebaseObject(profileRef);
		};
	}
}

export default ProfileFactory;