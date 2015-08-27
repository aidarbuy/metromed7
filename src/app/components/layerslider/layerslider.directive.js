class LayersliderDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/layerslider/layerslider.html',
			controller: LayersliderController,
			controllerAs: 'ls',
			link: function (scope, elem) {
				elem.layerSlider({
					showCircleTimer: false,
					showBarTimer: false,
					skin: 'none'
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