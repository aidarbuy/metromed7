import services from './services'

class ServicesFactory {
	constructor () {
		'ngInject';

		return	{ prices: services };
	}
}

export default ServicesFactory;