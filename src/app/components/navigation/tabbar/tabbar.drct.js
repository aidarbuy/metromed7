class TabbarDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/navigation/tabbar/tabbar.html',
			controller: TabbarController,
			controllerAs: 'tab'
		};

		return directive;
	}
}

class TabbarController {
	constructor (Navigation, $location) {
		'ngInject';

		// console.log($location.$$path);
		
		this.menu = Navigation;
		this.currentPath = $location.$$path;

		this.isSelected = function(path) {
			return this.currentPath === path;
		};

		this.setCurrent = function(path) {
			this.currentPath = path;
		};
	}
}

export default TabbarDirective;