class DoctorsController {
	constructor (Doctor) {
		'ngInject';

		this.doctors = Doctor.query();
	}
}

export default DoctorsController;