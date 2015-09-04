class ToolbarDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/navigation/toolbar/toolbar.html',
			replace: true,
			controller: ToolbarController,
			controllerAs: 'tb',
			bindToController: true
		};

		return directive;
	}
}


/*
	id: 1,
	firstname: 'Roshelle',
	lastname: 'Beckwith',
	birthdate: '1.1.1972',
	email: 'rbeckwi1@gmail.com'
	creationDate: '2.2.2015',
*/

class ToolbarController {
	constructor ($mdSidenav, Auth) {
		'ngInject';

		var self = this;

		Auth.$onAuth(function(authData) {
			self.authData = authData;
			// $window.console.log(self.authData);
		});

		this.toggleSidenav = function (navID) {
			$mdSidenav(navID).toggle();
		};
	}
}


export default ToolbarDirective;