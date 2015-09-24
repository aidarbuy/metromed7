class PrimaryCareController {
	constructor (PrimaryCare) {
		'ngInject';

		// this.pageHeader = "Primary Care Solutions";
		this.pageTitle = "Primary Care";
		this.headline = "For clients who do not have health insurance or have high deductible health plan.";

		this.content = PrimaryCare.query();

	}
}

export default PrimaryCareController;