function runBlock ($log, $rootScope, $mdColorPalette) {
	'ngInject';


	$rootScope.getMaterialColor = function (base, shade) {
		var color = $mdColorPalette[base][shade].value;
		return 'rgb(' +color[0]+ ',' +color[1]+ ',' +color[2]+ ')';
	};

	$log.debug('runBlock end');
}

export default runBlock;