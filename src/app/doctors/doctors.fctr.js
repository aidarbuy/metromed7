import doctors from './doctors';

class DoctorsFactory {
	constructor () {
		'ngInject';

		return {

			query: function () {
				return doctors;
			},

			findOne: function (id) {
				return doctors[id-1];
			}

		};

	}
}

export default DoctorsFactory;