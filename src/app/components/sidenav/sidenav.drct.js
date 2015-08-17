class SidenavDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: '../app/components/sidenav/sidenav.html',
			controller: SidenavController,
			controllerAs: 'sn'
		};

		return directive;
	}
}

class SidenavController {
	constructor (Navigation, Credentials, $mdSidenav) {
		'ngInject';

		this.menu = Navigation;
		this.contact = Credentials;

		this.toggleSidenav = function (navID) {
			$mdSidenav(navID).toggle();
		};
	}
}

export default SidenavDirective;