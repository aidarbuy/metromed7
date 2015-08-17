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