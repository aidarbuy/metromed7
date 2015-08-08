class RevolutionSliderDirective {
	constructor () {
		'ngInject';

		let directive = {
			restrict: 'E',
			templateUrl: 'app/components/revolution/rev2.html',
			controller: RevolutionSliderController,
			controllerAs: 'ls',
			bindToController: true,
			link: function () {
				var tpj=jQuery;       
				tpj.noConflict();       
				var revapi1;
								
				if(tpj('#rev_slider_1_1').revolution == undefined)
					revslider_showDoubleJqueryError('#rev_slider_1_1');
				else
				 revapi1 = tpj('#rev_slider_1_1').show().revolution({
					dottedOverlay:"none",
					delay:9000,
					startwidth:1160,
					startheight:600,
					hideThumbs:200,
					
					thumbWidth:100,
					thumbHeight:50,
					thumbAmount:3,
					
					navigationType:"bullet",
					navigationArrows:"solo",
					navigationStyle:"round", // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item),
					
					touchenabled:"on",
					onHoverStop:"on",
					
					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:20,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,
							
					shadow:0,
					fullWidth:"on",
					fullScreen:"off",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,

					shuffle:"off",
					
					autoHeight:"off",
					forceFullWidth:"off",
											
					hideThumbsOnMobile:"off",
					hideBulletsOnMobile:"off",
					hideArrowsOnMobile:"off",
					hideThumbsUnderResolution:0,
					
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0,
					videoJsPath:"#",
					fullScreenOffsetContainer: "" 
				});
			}
		};

		return directive;
	}
}

class RevolutionSliderController {
	constructor () {
		'ngInject';

	this.testMsg = "Hi from Revolution Slider Controller!";
	}
}

export default RevolutionSliderDirective;