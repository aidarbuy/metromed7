class TelemedicineController {
	constructor () {
		'ngInject';

		// Put variables in global scope to make them available to the browser console.
		var video = document.querySelector('video');
		var constraints = window.constraints = {
		  audio: false,
		  video: true
		};

		navigator.mediaDevices.getUserMedia(constraints)
		.then(function(stream) {
			var videoTracks = stream.getVideoTracks();
			console.log('Got stream with constraints:', constraints);
			console.log('Using video device: ' + videoTracks[0].label);
			stream.onended = function() {
			  console.log('Stream ended');
			};
			window.stream = stream; // make variable available to browser console
			video.srcObject = stream;
		})
		.catch(function(error) {
			console.log('navigator.getUserMedia error: ', error);
		});
	}
}

export default TelemedicineController;