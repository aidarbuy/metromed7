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
	constructor (Quote, Credentials) {
		'ngInject';

		this.quote = Quote;
		this.phone = {
			link: Credentials[0].link,
			title: Credentials[0].title,
			icon: Credentials[0].icon
		};
	}
}

export default QuoteDirective;