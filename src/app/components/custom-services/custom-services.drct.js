import CustomServices from './custom-services';

class CustomServicesDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/custom-services/custom-services.html',
			controller: CustomServicesController,
			controllerAs: 'cs'
		};

		return directive;
	}
}

class CustomServicesController {
	constructor () {
		'ngInject';

		this.data = CustomServices;
	}
}

export default CustomServicesDirective;