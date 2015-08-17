class MedicalSchoolDirective {
	constructor () {
		'ngInject';

		let directive = {
			restrict: 'E',
			templateUrl: 'app/components/medical-school/medical-school.html',
			controller: MedicalSchoolController,
			controllerAs: 'ms',
			bindToController: true
		};

		return directive;
	}
}

class MedicalSchoolController {
	constructor (MedicalSchool) {
		'ngInject';

		this.articles = MedicalSchool;

	}
}

export default MedicalSchoolDirective;