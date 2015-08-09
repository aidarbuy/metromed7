class NavController {
	constructor ($scope, $location, $mdSidenav) {
		'ngInject';

		// this.selectedIndex = 0;

		$scope.$watch('this.selectedIndex', function(current) {
			switch (current) {
				case 0:
					$location.url("/");
					break;
				case 1:
					$location.url("/about");
					break;
				case 2:
					$location.url("/services");
					break;
				case 3:
					$location.url("/doctors");
					break;
				case 4:
					$location.url("/primary");
					break;
				case 5:
					$location.url("/map");
					break;
				case 6:
					$location.url("/virtual");
					break;
			}
		});

		// SideNav
		this.menu = [
			{
				state : 'home',
				title: 'Home',
				icon: 'home'
			},
			{
				state : 'about',
				title: 'About Us',
				icon: 'info'
			},
			{
				state : 'services',
				title: 'Services',
				icon: 'local_hospital'
				// icon: 'add_shopping_cart'
			},
			{
				state : 'doctors',
				title: 'Doctors',
				icon: 'people'
			},
			{
				state : 'primary',
				title: 'Primary Care',
				icon: 'verified_user'
			},
			{
				state : 'map',
				title: 'Map',
				// icon: 'explore'
				icon: 'map'
				// icon: 'room'
			},
			{
				state : 'virtual',
				title: 'Virtual Tour',
				icon: 'visibility'
			}
		];

		this.admin = [
			{
				link : 'tel:1-703-687-4158',
				title: '(703) 687-4158',
				icon: 'call'
			},
			{
				link : 'mailto:info@metromeduc.com',
				title: 'info@metromeduc.com',
				icon: 'email'
			},
			{
				link : '#/map',
				title: '952 Edwards Ferry Road NE Leesburg VA 20176',
				icon: 'room'
			}
		];

		this.getTitle = function () {
			var path = $location.$$path;
			var navbarTitle = "";

			switch(path) {
				case '/':
					navbarTitle = "";
					break;
				case '/about':
					navbarTitle = "About Us";
					break;
				case '/services':
					navbarTitle = "Services";
					break;
				case '/doctors':
					navbarTitle = "Doctors";
					break;
				case '/primary':
					navbarTitle = "Primary Care";
					break;
				case '/map':
					navbarTitle = "Location";
					break;
				case '/virtual':
					navbarTitle = "Virtual Tour";
					break;
				default:
					navbarTitle = "";
			}

			return navbarTitle;
		};

		this.toggleSidenav = function (navID) {
			$mdSidenav(navID).toggle();
		};
	}
}

export default NavController;