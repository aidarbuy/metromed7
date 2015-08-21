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
	constructor (Navigation) {
		'ngInject';

		this.menu = Navigation;
	}
}

export default TabbarDirective;