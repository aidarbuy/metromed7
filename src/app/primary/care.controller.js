class PrimaryCareController {
	constructor () {
		'ngInject';

		this.pageHeader = "Primary Care Solutions";
		this.headline = "For clients who do not have health insurance or have high deductible health plan.";

		this.content = [
			{	
				img: 'reception.jpg',
				alt: "Photo of reception of MetroMed Urgent Care",
				header: "Option 1",
				text: [
					"This option is based on a membership fee of 100 dollars a month. A client gets full work-up, including X-Ray of the chest, EKG, complete blood count, lipid panel, thyroid hormone check, urine analysis and ultrasound screening of the heart, kidneys, gallbladder, liver and pelvic organs. The client also gets a phone access to a doctor any time he needs it.",
					"This will also include three additional sick visits or check ups.",
					"Primary Care is by appointments only.",
					"This option is good for people with chronic conditions like diabetes, hypertension or COPD."
				]
			}, {
				img: 'roshelle-primary-care.jpg',
				header: "Option 2",
				text: [
					"This option is based on a fee for service. Client pays for a particular service. This plan is good for healthy people who do not have any chronic conditions. They see a doctor once a year. They pay for periodic lab tests and physical exam."
				]
			}
		];

	}
}

export default PrimaryCareController;