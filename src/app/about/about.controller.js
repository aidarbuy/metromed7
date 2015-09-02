class AboutUsController {
	constructor (AboutUs) {
		'ngInject';

		this.imagePath = AboutUs.imagePath;

		this.welcome = AboutUs.welcome;

		this.whyMetroMed = AboutUs.whyMetroMed;
	}
}

export default AboutUsController;