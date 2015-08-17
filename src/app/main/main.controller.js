class MainController {
	constructor (TopSidebars, CustomServices, NanoMedical, Testimonials) {
		'ngInject';

		// console.log(NanoMedical);

		this.topSidebars = TopSidebars;

		this.quote = {
			title: "If You Feel Sick You Should Not Wait",
			text: "We are passionate about caring for your health and providing exceptional urgent care"
		};

		this.customServices = CustomServices;

		this.articles = NanoMedical;

		this.testimonials = Testimonials;
	}
}

export default MainController;
