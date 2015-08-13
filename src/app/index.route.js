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
      controllerAs: 'doctors'
    })
    .state('doctor/:id', {
      url: '/doctor/:id',
      templateUrl: 'app/doctors/doctor.html',
      controller: 'DoctorController',
      controllerAs: 'doc'
    })
    .state('primary', {
      url: '/primary',
      templateUrl: 'app/primary/care.html',
      controller: 'PrimaryCareController',
      controllerAs: 'primary'
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
    });

  $urlRouterProvider.otherwise('/');

 //  $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: false
	// });
}

export default routerConfig;