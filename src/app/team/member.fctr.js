class MemberFactory {
	constructor ($firebaseObject) {
		'ngInject';

		return function(memberName) {
			// create a reference to the database node where we will store our data
			var randomId = Math.round(Math.random() * 100000000);
			var ref = new Firebase("https://metromeduc.firebaseio.com/team/" + randomId);
			var memberRef = ref.child(memberName);

			// return it as a synchronized object
			return $firebaseObject(memberRef);
		}
	}
}

export default MemberFactory;