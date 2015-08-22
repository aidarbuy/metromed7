function routerConfig ($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/about/about.html',
			controller: 'AboutUsController',
			controllerAs: 'about'
		})
		.state('services', {
			url: '/services',
			templateUrl: 'app/services/services.html',
			controller: 'ServicesController',
			controllerAs: 'srv'
		})
		.state('doctors', {
			url: '/doctors',
			templateUrl: 'app/doctors/doctors.html',
			controller: 'DoctorsController',
			controllerAs: 'docs'
		})


		.state('doctor', {
			url: '/doctor/{id}',
			// reload: true,
			// reloadOnSearch: true,
			templateUrl: 'app/doctors/doctor.html',
			controller: 'DoctorController',
			controllerAs: 'doc',
			resolve: {
				id: ['$stateParams', function ($stateParams) {
					return $stateParams.id;
				}]
			}
		})


		.state('primary', {
			url: '/primary',
			templateUrl: 'app/primary/care.html',
			controller: 'PrimaryCareController',
			controllerAs: 'pc'
		})
		.state('map', {
			url: '/map',
			templateUrl: 'app/map/map.html',
			controller: 'MapController',
			controllerAs: 'gmap'
		})
		.state('virtual', {
			url: '/virtual',
			templateUrl: 'app/virtual/tour.html',
			controller: 'VirtualTourController',
			controllerAs: 'vtour'
		})
		.state('index', {
			url: "",
			views: {
				"viewA": { template: "index.viewA" },
				"viewB": { template: "index.viewB" }
			}
		})
		.state('route1', {
			url: "/route1",
			views: {
				"viewA": { template: "route1.viewA" },
				"viewB": { template: "route1.viewB" }
			}
		})
		.state('route2', {
			url: "/route2",
			views: {
				"viewA": { template: "route2.viewA" },
				"viewB": { template: "route2.viewB" }
			}
		});

	$urlRouterProvider.otherwise('/');

	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: true,
	// 	rewriteLinks: true
	// });
}

export default routerConfig;