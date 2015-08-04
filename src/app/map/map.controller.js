class MapController {
	constructor () {
		'ngInject';

		this.testMsg = "Hi from MapController!";

		this.map = { center: { latitude: 39.116852, longitude: -77.539673 }, zoom: 10 };

		this.marker = {
			id: 0,
			coords: {
				latitude: 39.116852,
				longitude: -77.539673
			},
			options: { draggable: false }
		};

		// uiGmapGoogleMapApi is a promise.
		// The "then" callback function provides the google.maps object.
		// uiGmapGoogleMapApi.then(function(maps) {
			// console.log("uiGmapGoogleMapApi is ready!");

			// this.map = {
			// 	center: { latitude: 45, longitude: -73 }
			// 	,zoom: 8 
			// };
		// });

	}
}

export default MapController;