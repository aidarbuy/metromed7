class TabbarDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: '../app/components/tabbar/tabbar.html',
			controller: TabbarController,
			controllerAs: 'tab'
		};

		return directive;
	}
}

class TabbarController {
	constructor (Navigation) {
		'ngInject';

		this.menu = Navigation;
	}
}

export default TabbarDirective;