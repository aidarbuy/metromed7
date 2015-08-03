class LayerSliderDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/layerslider/slider.html',
      controller: LayerSliderController,
      controllerAs: 'ls',
      bindToController: true,
      link: function () {
        // Initializing the slider
        angular.element("#layerslider").layerSlider({
          pauseOnHover: false,
          skinsPath: 'layerslider/skins/'
        });
      }
    };

    return directive;
  }
}

class LayerSliderController {
  constructor () {
    'ngInject';

  this.testMsg = "Hi from Layer Slider Controller!";
  }
}

export default LayerSliderDirective;