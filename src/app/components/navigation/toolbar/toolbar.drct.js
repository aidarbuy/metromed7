class ToolbarDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/toolbar/toolbar.html',
			replace: true,
			controller: ToolbarController,
			controllerAs: 'tb',
			bindToController: true
		};

		return directive;
	}
}

class ToolbarController {
	constructor ($mdSidenav) {
		'ngInject';

		this.toggleSidenav = function (navID) {
			$mdSidenav(navID).toggle();
		};
	}
}

export default ToolbarDirective;