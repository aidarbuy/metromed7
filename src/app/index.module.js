import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';
import MainController from './main/main.controller';
import NavController from '../app/components/navbar/nav.controller';
import LayerSliderDirective from '../app/components/layerslider/slider.directive';
import RevolutionSliderDirective from '../app/components/revolution/revolution.directive';
import AboutUsController from './about/about.controller';
import ServicesController from './services/services.controller';
import DoctorsController from './doctors/doctors.controller';
import DoctorController from './doctors/doctor.controller';
import DoctorsFactory from './doctors/doctors.factory';
import PrimaryCareController from './primary/care.controller';
import MapController from './map/map.controller';
import VirtualTourController from './virtual/tour.controller';
import LoginController from './login/login.controller';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import FooterDirective from '../app/components/footer/footer.directive';
import GridBottomSheetCtrl from '../app/components/footer/bottom-sheet.ctrl';
import GithubContributorService from '../app/components/githubContributor/githubContributor.service';

angular.module('metromed', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 
														'ui.router', 'ngMaterial', 'ngMdIcons', 'uiGmapgoogle-maps', 'firebase'])
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	.controller('MainController', MainController)
	.controller('NavController', NavController)
	.directive('layerSlider', () => new LayerSliderDirective())
	.directive('revolutionSlider', () => new RevolutionSliderDirective())
	.controller('AboutUsController', AboutUsController)
	.controller('ServicesController', ServicesController)
	.controller('DoctorsController', DoctorsController)
	.controller('DoctorController', DoctorController)
	.factory('Doctor', () => new DoctorsFactory())
	.controller('PrimaryCareController', PrimaryCareController)
	.controller('MapController', MapController)
	.controller('VirtualTourController', VirtualTourController)
	.controller('LoginController', LoginController)
	.controller('GridBottomSheetCtrl', GridBottomSheetCtrl)
	.directive('acmeNavbar', () => new NavbarDirective())
	.directive('acmeFooter', () => new FooterDirective())
	.service('githubContributor', GithubContributorService);