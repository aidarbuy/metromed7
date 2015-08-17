class ToolbarDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: '../app/components/toolbar/toolbar.html',
			controller: ToolbarController,
			controllerAs: 'tb'
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