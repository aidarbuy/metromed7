class FooterDirective {
	constructor () {
		'ngInject';

		let directive = {
			restrict: 'EA',
			templateUrl: 'app/components/navigation/footer/footer.html',
			controller: FooterController,
			controllerAs: 'ft',
			bindToController: true
		};

		return directive;
	}
}

class FooterController {
	constructor ($mdBottomSheet) {
		'ngInject';

		this.openBottomSheet = function ($event) {
			$mdBottomSheet.show({
				templateUrl: 'app/components/navigation/footer/bottom-sheet.html',
				controller: 'GridBottomSheetCtrl',
				controllerAs: 'bs'
				// targetEvent: $event
			});
		};
	}
}

export default FooterDirective;