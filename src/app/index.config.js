function config ($logProvider, $mdThemingProvider) {
	'ngInject';

	// Enable log
	$logProvider.debugEnabled(true);

	// Configuring default theme
	$mdThemingProvider.theme('default')
		.primaryPalette('cyan', {
			// 50, 100-900, A100, A200, A400, A700
			'hue-1': '600',
			'hue-2': '800',
			'hue-3': '600'
		})
		.accentPalette('pink')
		.warnPalette('red');
}

export default config;