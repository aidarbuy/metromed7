class MainController {
	constructor ($scope, $timeout) {
		'ngInject';

		$scope.currentUser = null;
		$scope.currentText = null;
		$scope.messages = [];

		// Message.childAdded(function(addedChild) {
			// $scope.messages.push(addedChild);
		// });

		// messagesRef.on('child_changed', function(snapshot) {
		// 	$timeout(function() {
		// 		var snapshotVal = snapshot.val();
		// 		var message = findMessageByKey(snapshot.key());
		// 		message.text = snapshotVal.text;
		// 	});
		// });

		// messagesRef.on('child_removed', function(snapshot) {
		// 	$timeout(function() {
		// 		deleteMessageByKey(snapshot.key());
		// 	});
		// });

		function findMessageByKey(key) {
			var messageFound = null;
			for(var i=0; i < $scope.messages.length; i++) {
				var currentMessage = $scope.messages[i];
				if (currentMessage.name === key) {
					messageFound = currentMessage;
					break;
				}
			}
			return messageFound;
		}

		function deleteMessageByKey(key) {
			for(var i=0; i < $scope.messages.length; i++) {
				var currentMessage = $scope.messages[i];
				if (currentMessage.name === key) {
					$scope.messages.splice(i, 1);
					break;
				}
			}
		}

		$scope.sendMessage = function() {
			var newMessage = {
				user: $scope.currentUser,
				text: $scope.currentText
			};

			var promise = Message.add(newMessage);
			promise.then(function(data) {
				console.log(data.name);
			});
		};

		$scope.turnFeedOff = function() {
			Message.off();
		};

		$scope.pageNext = function() {
			var lastItem = $scope.messages[$scope.messages.length - 1];
			Message.pageNext(lastItem.name, 2).then(function(messages) {
				$scope.messages = messages;
			});
		};

		$scope.pageBack = function() {
			var firstItem = $scope.messages[0];
			Message.pageBack(firstItem.name, 2).then(function(messages) {
				$scope.messages = messages;
			});
		};
	}
}

export default MainController;
