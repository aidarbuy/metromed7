class CustomServicesDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: '../app/components/custom-services/custom-services.html',
			controller: CustomServicesController,
			controllerAs: 'cs'
		};

		return directive;
	}
}

class CustomServicesController {
	constructor (CustomServices) {
		'ngInject';

		this.data = CustomServices;
	}
}

export default CustomServicesDirective;