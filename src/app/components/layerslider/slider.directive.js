class LayerSliderDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/layerslider/responsive.html',
      controller: LayerSliderController,
      controllerAs: 'ls',
      bindToController: true,
      link: function () {
        // Initializing the slider
        angular.element("#layerslider").layerSlider({
          pauseOnHover: false,
          autoPlayVideos: false,
          // skin: 'borderlessdark3d',
          skin: 'fullwidth',
          hoverBottomNav: true,
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