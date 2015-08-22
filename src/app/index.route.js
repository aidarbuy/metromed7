function routerConfig ($routeProvider) {
	'ngInject';

	$routeProvider
		.when('/', {
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.when('/about', {
			templateUrl: 'app/about/about.html',
			controller: 'AboutUsController',
			controllerAs: 'about'
		})
		.when('/services', {
			templateUrl: 'app/services/services.html',
			controller: 'ServicesController',
			controllerAs: 'srv'
		})
		.when('/doctors', {
			templateUrl: 'app/doctors/doctors.html',
			controller: 'DoctorsController',
			controllerAs: 'docs'
		})
		.when('/doctor/:id', {
			templateUrl: 'app/doctors/doctor.html',
			controller: 'DoctorController',
			controllerAs: 'doc'
		})
		.when('/primary', {
			templateUrl: 'app/primary/care.html',
			controller: 'PrimaryCareController',
			controllerAs: 'pc'
		})
		.when('/map', {
			templateUrl: 'app/map/map.html',
			controller: 'MapController',
			controllerAs: 'gmap'
		})
		.when('/virtual', {
			templateUrl: 'app/virtual/tour.html',
			controller: 'VirtualTourController',
			controllerAs: 'vtour'
		})
		.otherwise('/');

	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false,
	// 	rewriteLinks: true
	// });
}

export default routerConfig;