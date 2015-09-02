class ServicesController {
	constructor (Services) {
		'ngInject';

		this.prices = Services.prices;
	}
}

export default ServicesController;