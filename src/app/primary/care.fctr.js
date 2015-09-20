import primary from './care';

class PrimaryCareFactory {
	constructor () {
		'ngInject';

		// console.log(primary);

		let factory = {
			query: function queryPrimary() {
				return primary;
			}
		};

		return factory;

	}
}

export default PrimaryCareFactory;