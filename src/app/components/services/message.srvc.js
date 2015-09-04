/*global Firebase*/

class MessageService {
	constructor ($q, $firebaseObject, $firebaseArray) {
		'ngInclude';

		var FBURL = 'https://metromeduc.firebaseio.com';
		var messageRef = new Firebase(FBURL).child('messages');
		var fireMessage = $firebaseObject(messageRef);
		var fireMessages = $firebaseArray(messageRef);

		return {
			childAdded: function childAdded(cb) {
				fireMessage.$loaded().then(function(data) {
					console.log(data);
					var val = data.snapshot.value;
					cb.call(this, {
						user: val.user,
						text: val.text,
						name: data.snapshot.name
					});
				});
			},
			add: function addMessage(message) {
				return fireMessages.$add(message);
			},
			off: function turnMessagesOff() {
				// fireMessage.off();
			},
			pageNext: function pageNext(name, numberOfItems) {
				var deferred = $q.defer();
				var messages = [];
				messageRef.startAt(null, name).limitToFirst(numberOfItems).once('value', function(snapshot) {
					snapshot.forEach(function(snapItem) {
						var itemVal = snapItem.val();
						itemVal.name = snapItem.key();
						messages.push(itemVal);
					});
					deferred.resolve(messages);
				});
				return deferred.promise;
			},
			pageBack: function pageBack(name, numberOfItems) {
				var deferred = $q.defer();
				var messages = [];
				messageRef.endAt(null, name).limitToLast(numberOfItems).once('value', function(snapshot) {
					snapshot.forEach(function(snapItem) {
						var itemVal = snapItem.val();
						itemVal.name = snapItem.key();
						messages.push(itemVal);
					});
					deferred.resolve(messages);
				});
				return deferred.promise;
			}
		};
	}
}

export default MessageService;