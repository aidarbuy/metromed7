class LayersliderDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/layerslider/layerslider.html',
			replace: true,
			controller: LayersliderController,
			controllerAs: 'ls',
			compile: function (elem) {
				elem.layerSlider({
					showCircleTimer: false,
					showBarTimer: false,
					skin: 'noskin'
				});
			}
		};

		return directive;
	}
}

class LayersliderController {
	constructor () {
		'ngInject';
	}
}

export default LayersliderDirective;