import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import LayerSliderDirective from '../app/components/layerslider/slider.directive';
import NavController from '../app/components/navbar/nav.controller';
import MainController from './main/main.controller';
import AboutUsController from './about/about.controller';
import ServicesController from './services/services.controller';
import DoctorsController from './doctors/doctors.controller';
import PrimaryCareController from './primary/care.controller';
import MapController from './map/map.controller';
import VirtualTourController from './virtual/tour.controller';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import FooterDirective from '../app/components/footer/footer.directive';

angular.module('metromed7', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'ngMdIcons', 'uiGmapgoogle-maps'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .controller('NavController', NavController)
  .directive('layerSlider', () => new LayerSliderDirective())
  .controller('MainController', MainController)
  .controller('AboutUsController', AboutUsController)
  .controller('ServicesController', ServicesController)
  .controller('DoctorsController', DoctorsController)
  .controller('PrimaryCareController', PrimaryCareController)
  .controller('MapController', MapController)
  .controller('VirtualTourController', VirtualTourController)
  .directive('acmeNavbar', () => new NavbarDirective())
  .directive('acmeFooter', () => new FooterDirective());