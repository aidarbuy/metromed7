class ServicesController {
	constructor () {
		'ngInject';

		this.prices = [{
			title: "School Physicals",
			price: 20,
			list: [	"Until August 31",
							"Vision Screening",
							"Immunization verification",
							"Scoliosis Screening" ]
		}, {
			title: "Sports Physicals",
			price: 20,
			list: [	"Until August 31",
							"Vision Screening",
							"BMI",
							"Cardiac Screening" ]
		}, {
			title: "Adult Physicals",
			price: 60,
			list: [	"Vision Screening",
							"BMI",
							"Cancer Screening" ]
		}, {
			title: "DOT Physicals",
			price: 63,
			list: [	"Urine Test",
							"BMI",
							"Vision Screening" ]
		}];

		this.testMsg = "Hi from ServicesController!";

	}
}

export default ServicesController;