class DoctorController {
	constructor (Doctors, $stateParams) {
		'ngInject';

		this.doctor = Doctors.findOne($stateParams.id);
		// var name = this.doctor.firstname + " " + this.doctor.lastname;
		// this.img = "assets/" + this.doctor.img.href.src;
		// this.alt = "Photo of doctor " + name;
		// this.header = "Dr. " + name;
	}
}

export default DoctorController;