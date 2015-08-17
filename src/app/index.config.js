function config ($logProvider, $mdThemingProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  $mdThemingProvider.theme('default')
  	.primaryPalette('cyan');
  	// .accentPalette('orange')
  	// .dark()
}

export default config;