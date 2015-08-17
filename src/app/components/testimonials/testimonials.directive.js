class TestimonialsDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: '../app/components/testimonials/testimonials.html',
			controller: TestimonialsController,
			controllerAs: 't'
		};

		return directive;
	}
}

class TestimonialsController {
	constructor (Testimonials) {
		'ngInject';

		this.testimonials = Testimonials;
	}
}

export default TestimonialsDirective;