class SidenavDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/navigation/sidenav/sidenav.html',
			// replace: true,
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