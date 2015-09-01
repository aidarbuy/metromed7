class UnsafeFilter {
	constructor ($sce) {
		'ngInject';

		function unsafe (val) {
			return $sce.trustAsHtml(val);
		}

		return unsafe;
	}
}

export default UnsafeFilter;