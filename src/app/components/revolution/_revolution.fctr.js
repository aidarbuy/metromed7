'use strict';

var Revolution = function (sliders) {

	return {
		query: function () {
			// console.log("Revolution.query: returning sliders array.")
			return sliders;
		}
	};

};

Revolution.$inject = ['sliders'];

app.factory('Revolution', Revolution);