import testimonials from './testimonials';

class TestimonialsDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/testimonials/testimonials.html',
			controller: TestimonialsController,
			controllerAs: 't'
		};

		return directive;
	}
}

class TestimonialsController {
	constructor () {
		'ngInject';

		this.testimonials = testimonials;
	}
}

export default TestimonialsDirective;