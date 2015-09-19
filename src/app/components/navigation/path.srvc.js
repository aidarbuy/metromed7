class pathService {
	constructor () {
		'ngInject';

		// this.path = '/' || $location.$$path;

		var self = this;

		this.getPath = function() {
			return self.path;
		};

		this.setPath = function(path) {
			self.path = path;
			// console.log(self.path);

			switch(self.path){
				case '/': 				self.title = 'MetroMed Urgent Care'; 				break;
				case '/about': 		self.title = 'About MetroMed-UC'; 					break;
				case '/services': self.title = 'MetroMed Services'; 					break;
				case '/doctors': 	self.title = 'MetroMed Doctors'; 						break;
				case '/doctor/1': self.title = 'Dr.Roshelle - MetroMed-UC'; 	break;
				case '/doctor/2': self.title = 'Dr.Matthew - MetroMed-UC'; 		break;
				case '/doctor/3': self.title = 'Dr.Patricia - MetroMed-UC'; 	break;
				case '/doctor/4': self.title = 'Dr.Brian - MetroMed-UC'; 			break;
				case '/primary': 	self.title = 'MetroMed Primary Care'; 			break;
				case '/map': 			self.title = 'MetroMed Location'; 					break;
				case '/virtual': 	self.title = 'Virtual Tour of MetroMed-UC'; break;
			}
		};
	}
}

export default pathService;