class SidenavDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/navigation/sidenav/sidenav.html',
			replace: true,
			controller: SidenavController,
			controllerAs: 'sn'
		};

		return directive;

	}
}

class SidenavController {
	constructor (Navigation, Credentials, $mdSidenav, $location) {
		'ngInject';

		this.menu = Navigation;
		this.contact = Credentials;
		this.currentPath = $location.$$path;

		this.toggleSidenav = function(navID, path) {
			$mdSidenav(navID).toggle();
			this.currentPath = path;
		};

		this.isSelected = function(path) {
			return this.currentPath === path;
		};

	}
}

export default SidenavDirective;