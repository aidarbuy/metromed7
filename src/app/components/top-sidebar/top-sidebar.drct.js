import topSidebarData from './top-sidebar';


class TopSidebarDirective {
	constructor () {
		'ngInject';

		let directive = {
			templateUrl: 'app/components/top-sidebar/top-sidebar.html',
			controller: TopSidebarController,
			controllerAs: 'ts'
		};

		return directive;

	}
}


class TopSidebarController {
	constructor () {
		'ngInject';

		this.data = topSidebarData;
	}
}


export default TopSidebarDirective;