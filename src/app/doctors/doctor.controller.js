class DoctorController {
	constructor (Doctors, $routeParams) {
		'ngInject';

		this.doctor = Doctors.findOne($routeParams.id);
		// var name = this.doctor.firstname + " " + this.doctor.lastname;
		// this.img = "assets/" + this.doctor.img.href.src;
		// this.alt = "Photo of doctor " + name;
		// this.header = "Dr. " + name;
	}
}

export default DoctorController;