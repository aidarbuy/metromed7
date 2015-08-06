class NavController {
	constructor ($scope, $location, $mdSidenav, $mdBottomSheet, $mdDialog) {
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
				link : '',
				title: '952 Edwards Ferry Road NE Leesburg VA 20176',
				icon: 'room'
			},
			{
				// link : 'showListBottomSheet($event)',
				link : 'tel:(703) 687-4158',
				title: '(703) 687-4158',
				icon: 'call'
			},
			{
				// link : 'showListBottomSheet($event)',
				link : 'mailto:info@metromeduc.com',
				title: 'info@metromeduc.com',
				icon: 'email'
			}
		];

		this.activity = [
			{
				what: 'Brunch this weekend?',
				who: 'Ali Conners',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{
				what: 'Summer BBQ',
				who: 'to Alex, Scott, Jennifer',
				when: '3:08PM',
				notes: "Wish I could come out but I'm out of town this weekend"
			},
			{
				what: 'Oui Oui',
				who: 'Sandra Adams',
				when: '3:08PM',
				notes: "Do you have Paris recommendations? Have you ever been?"
			},
			{
				what: 'Birthday Gift',
				who: 'Trevor Hansen',
				when: '3:08PM',
				notes: "Have any ideas of what we should get Heidi for her birthday?"
			},
			{
				what: 'Recipe to try',
				who: 'Brian Holt',
				when: '3:08PM',
				notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
			},
		];

		this.alert = '';

		this.showListBottomSheet = function($event) {
			this.alert = '';

			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
				controller: 'ListBottomSheetCtrl',
				targetEvent: $event
			}).then(function(clickedItem) {
				this.alert = clickedItem.name + ' clicked!';
			});
		};
		
		this.showAdd = function(ev) {
			$mdDialog.show({
				controller: DialogController,
				template: '<md-dialog aria-label="Mango (Fruit)"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName" placeholder="Placeholder text"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="theMax"> </md-input-container> </div> <md-input-container flex> <label>Address</label> <input ng-model="user.address"> </md-input-container> <div layout layout-sm="column"> <md-input-container flex> <label>City</label> <input ng-model="user.city"> </md-input-container> <md-input-container flex> <label>State</label> <input ng-model="user.state"> </md-input-container> <md-input-container flex> <label>Postal Code</label> <input ng-model="user.postalCode"> </md-input-container> </div> <md-input-container flex> <label>Biography</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
				targetEvent: ev,
			})
			.then(function(answer) {
				this.alert = 'You said the information was "' + answer + '".';
			}, function() {
				this.alert = 'You cancelled the dialog.';
			});
		};


		function DialogController($mdDialog) {
			this.hide = function() {
				$mdDialog.hide();
			};

			this.cancel = function() {
				$mdDialog.cancel();
			};

			this.answer = function(answer) {
				$mdDialog.hide(answer);
			};
		}



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


		this.menuItems = [{
			name: "Home",
			state: "home",
			icon: "assets/icons/menu.svg",
			svg: "M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
		}, {
			name: "About Us",
			state: "about",
			icon: "assets/icons/favorite.svg",
			svg: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
		}, {
			name: "Services",
			state: "services",
			icon: "assets/icons/more_vert.svg",
			svg: "M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
		}, {
			name: "Doctors",
			state: "doctors",
			icon: "assets/icons/menu.svg",
			svg: "M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"
		}, {
			name: "Primary Care",
			state: "primary",
			icon: "assets/icons/favorite.svg",
			svg: "M18,14H14V18H10V14H6V10H10V6H14V10H18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
		}, {
			name: "Map",
			state: "map",
			icon: "assets/icons/more_vert.svg",
			svg: "M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"
		}, {
			name: "Virtual Tour",
			state: "virtual",
			icon: "assets/icons/menu.svg",
			svg: "M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z"
		}];


		this.toggleSidenav = function (navID) {
			$mdSidenav(navID).toggle();
		};
	}
}

export default NavController;