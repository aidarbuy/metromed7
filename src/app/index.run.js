function runBlock ($log) {
	'ngInject';
	$log.debug('runBlock end');

	// var urls = [
	// 	'img/icons/share-arrow.svg',
	// 	'img/icons/upload.svg',
	// 	'img/icons/copy.svg',
	// 	'img/icons/print.svg',
	// 	'img/icons/hangout.svg',
	// 	'img/icons/mail.svg',
	// 	'img/icons/message.svg',
	// 	'img/icons/copy2.svg',
	// 	'img/icons/facebook.svg',
	// 	'img/icons/twitter.svg'
	// ];

	// angular.forEach(urls, function(url) {
	// 	$http.get(url, {cache: $templateCache});
	// });


	// supplant() method from Crockfords `Remedial Javascript`
	/*
	var supplant =  function (template, values, pattern) {
		pattern = pattern || /\{([^\{\}]*)\}/g;

		return template.replace(pattern, function(a, b) {
			var p = b.split('.');
			var r = values;

			try {
				for (var s in p) { r = r[p[s]]; }
			} catch(e) {
				r = a;
			}

		return (typeof r === 'string' || typeof r === 'number') ? r : a;
		});
	};

	// supplant() method from Crockfords `Remedial Javascript`
	Function.prototype.method = function (name, func) {
		this.prototype[name] = func;
		return this;
	};

	String.method("supplant", function( values, pattern ) {
		var self = this;
		return supplant(self, values, pattern);
	});

	// Publish this global function...
	String.supplant = supplant;
	*/
}

export default runBlock;
