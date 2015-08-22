class GreensockDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/greensock/greensock.html',
			controller: GreensockController,
			controllerAs: 'gs',
			link: function () {
				// element.TweenMax.to(element, 2, {left:600});
			}
		};

		return directive;
	}
}

class GreensockController {
	constructor () {
		'ngInject';

		// TweenMax.to('.logo', 2, {left:600});
	}
}

export default GreensockDirective;