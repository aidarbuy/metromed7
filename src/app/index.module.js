import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';

// Navigation
import Navigation from '../app/components/navigation/navigation';
import Credentials from '../app/components/navigation/credentials';
import ToolbarDirective from '../app/components/navigation/toolbar/toolbar.drct';
import SidenavDirective from '../app/components/navigation/sidenav/sidenav.drct';
import pathService from '../app/components/navigation/path.srvc';
import TabbarDirective from '../app/components/navigation/tabbar/tabbar.drct';
import FooterDirective from '../app/components/navigation/footer/footer.drct';
import GridBottomSheetCtrl from '../app/components/navigation/footer/bottom-sheet.ctrl';

// Home page
import MainController from './main/main.ctrl';
import LayersliderDirective from '../app/components/layerslider/layerslider.drct';
import TopSidebarDirective from '../app/components/top-sidebar/top-sidebar.drct';
import QuoteDirective from '../app/components/quote/quote.drct';
import CustomServicesDirective from '../app/components/custom-services/custom-services.drct';
import MedicalSchoolDirective from '../app/components/medical-school/articles.drct';
import TestimonialsDirective from '../app/components/testimonials/testimonials.drct';

// Pages
import AboutUsController from './about/about.ctrl';
import AboutUsFactory from './about/about.fctr';
import ServicesController from './services/services.ctrl';
import ServicesFactory from './services/services.fctr';
import DoctorsFactory from './doctors/doctors.fctr';
import DoctorsController from './doctors/doctors.ctrl';
import DoctorController from './doctors/doctor.ctrl';
import PrimaryCareController from './primary/care.ctrl';
import PrimaryCareFactory from './primary/care.fctr';
import MapController from './map/map.ctrl';
import VirtualTourController from './virtual/tour.ctrl';
import PhotogalleryController from './gallery/gallery.ctrl';
import unsafeFilter from '../app/components/filters/unsafe.fltr';

// Auth
import AuthController from './auth/services/auth.ctrl';
import AuthFactory from './auth/services/auth.fctr';
import AuthStateFactory from './auth/services/auth-state.fctr';
import LoginController from './auth/login/login.ctrl';
import SignupController from './auth/signup/signup.ctrl';
import ProfileController from './auth/profile/profile.ctrl';
import ProfileFactory from './auth/profile/profile.fctr';

angular.module('metromed', ['ui.router', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 
														'ngMaterial', 'uiGmapgoogle-maps', 'firebase', 'ui.router.title'])
	.config(config)
	.config(routerConfig)
	.run(runBlock)

	// Navigation
	.value('Navigation', Navigation)
	.value('Credentials', Credentials)
	.service('pathService', () => new pathService())
	.directive('toolbar', () => new ToolbarDirective())
	.directive('sidenav', () => new SidenavDirective())
	.directive('tabbar', () => new TabbarDirective())
	.directive('metromedFooter', () => new FooterDirective())
	.controller('GridBottomSheetCtrl', GridBottomSheetCtrl)

	// Home page
	.controller('MainController', MainController)
	.directive('layerslider', () => new LayersliderDirective())
	.directive('topSidebar', () => new TopSidebarDirective())
	.directive('quote', () => new QuoteDirective())
	.directive('customServices', () => new CustomServicesDirective())
	.directive('medicalSchool', () => new MedicalSchoolDirective())
	.directive('testimonials', () => new TestimonialsDirective())

	// Pages
	.controller('AboutUsController', AboutUsController)
	.factory('AboutUs', () => new AboutUsFactory())
	.controller('ServicesController', ServicesController)
	.factory('Services', () => new ServicesFactory())
	.factory('Doctors', () => new DoctorsFactory())
	.controller('DoctorsController', DoctorsController)
	.controller('DoctorController', DoctorController)
	.controller('PrimaryCareController', PrimaryCareController)
	.factory('PrimaryCare', () => new PrimaryCareFactory())
	.controller('MapController', MapController)
	.controller('VirtualTourController', VirtualTourController)
	.controller('PhotogalleryController', PhotogalleryController)
	.filter('unsafe', ['$sce', ($sce) => new unsafeFilter($sce)])

	// Auth
	.controller('AuthController', AuthController)
	.factory('Auth', ['$firebaseAuth', ($firebaseAuth) => new AuthFactory($firebaseAuth)])
	.factory('AuthState', () => new AuthStateFactory())
	.controller('LoginController', LoginController)
	.controller('SignupController', SignupController)
	.controller('ProfileController', ProfileController)
	.factory('Profile', ['$firebaseObject', ($firebaseObject) => new ProfileFactory($firebaseObject)]);