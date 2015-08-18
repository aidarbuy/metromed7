class QuoteDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/quote/quote.html',
			controller: QuoteController,
			controllerAs: 'qt'
		};

		return directive;
	}
}

class QuoteController {
	constructor (Quote) {
		'ngInject';

		this.quote = Quote;
	}
}

export default QuoteDirective;