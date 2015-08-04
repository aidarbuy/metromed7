class AboutUsController {
	constructor () {
		'ngInject';

		this.welcome = {
			title: "Welcome to MetroMed!",
			conditions: {
				header: "At MetroMed Urgent Care we treat patients of all ages, with a variety of conditions:",
				list: [
					"Asthma",
					"Abdominal Pain",
					"Allergic Reactions",
					"Bites/Stings",
					"Broken Bones & Sprains",
					"Burns",
					"Eye Injuries",
					"Lacerations",
					"Rashes",
					"Sore Throats",
					"Sports Injuries",
					"DOT Physicals",
					"Travel Medicine",
					"Chest Pain",
					"Occupational Health",
					"and many other..."
			]},
			asterix: "* If you feel that you need to be admitted to the hospital then it is time to go to emergency room."
		};

		this.whyMetroMed = {
			title: "Why MetroMed Urgent Care:",
			items: [
				"Experienced emergency room docs and personnel",
				"Bed-side Ultrasound Screening",
				"X-Ray",
				"Skillfully done procedures, such as:",
				"Joint aspiration",
				"Ingrown toenail removal",
				"Foreign body removal from the eye",
				"Reduction of fractures and dislocations",
				"Prices guaranteed to be the lowest in the area",
				"Laboratory and Pharmacy",
				"IV treatment and EKG",
				"Location. Yes, we are right next to Wal-Mart",
				"Clean, Quick and Pleasant"
			]
		};

		this.testMsg = "Hi from AboutUsController!";

	}
}

export default AboutUsController;