class DoctorsController {
	constructor (Doctors) {
		'ngInject';

		this.list = Doctors.query();

	}
}

export default DoctorsController;