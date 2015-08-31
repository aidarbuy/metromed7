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

class ToolbarController {
	constructor ($mdSidenav, Auth, $window) {
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