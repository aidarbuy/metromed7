'use strict';

var RevolutionCtrl = function ($scope, Revolution) {

	$scope.sliders = Revolution.query();

};

RevolutionCtrl.$inject = ['$scope', 'Revolution'];

app.controller('RevolutionCtrl', RevolutionCtrl);