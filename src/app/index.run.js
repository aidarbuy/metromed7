function runBlock ($log, $rootScope, $mdColorPalette) {
	'ngInject';
	$log.debug('runBlock end');
	
	$rootScope.getMaterialColor = function (base, shade) {
		var color = $mdColorPalette[base][shade].value;
		return 'rgb(' +color[0]+ ',' +color[1]+ ',' +color[2]+ ')';
	};
}

export default runBlock;
