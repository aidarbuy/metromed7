import aboutUs from './about.js';

class AboutUsFactory {
	constructor () {
		'ngInject';

		var factory = {
			imagePath: aboutUs.imagePath,

			welcome: aboutUs.welcome,
			
			whyMetroMed: aboutUs.whyMetroMed
		};

		return factory;
	}
}

export default AboutUsFactory;