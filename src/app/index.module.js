import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';

import Navigation from '../app/components/navigation/navigation';
import Credentials from '../app/components/navigation/credentials';
import ToolbarDirective from '../app/components/navigation/toolbar/toolbar.drct';
import SidenavDirective from '../app/components/navigation/sidenav/sidenav.drct';
import TabbarDirective from '../app/components/navigation/tabbar/tabbar.drct';
import FooterDirective from '../app/components/navigation/footer/footer.directive';
import GridBottomSheetCtrl from '../app/components/navigation/footer/bottom-sheet.ctrl';

import MainController from './main/main.controller';
import LayersliderDirective from '../app/components/layerslider/layerslider.directive';
import TopSidebar from '../app/components/top-sidebar/top-sidebar';
import TopSidebarDirective from '../app/components/top-sidebar/top-sidebar.drct';
import Quote from '../app/components/quote/quote';
import QuoteDirective from '../app/components/quote/quote.drct';
import CustomServices from '../app/components/custom-services/custom-services';
import CustomServicesDirective from '../app/components/custom-services/custom-services.drct';
import MedicalSchoolDirective from '../app/components/medical-school/articles.drct';
import MedicalSchool from '../app/components/medical-school/articles';
import TestimonialsDirective from '../app/components/testimonials/testimonials.directive';
import Testimonials from '../app/components/testimonials/testimonials';

import AboutUsController from './about/about.controller';
import AboutUsFactory from './about/about.fctr';
import ServicesController from './services/services.ctrl';
import ServicesFactory from './services/services.fctr';
import DoctorsFactory from './doctors/doctors.factory';
import DoctorsController from './doctors/doctors.controller';
import DoctorController from './doctors/doctor.controller';
import PrimaryCareController from './primary/care.controller';
import MapController from './map/map.controller';
import VirtualTourController from './virtual/tour.controller';
import unsafeFilter from '../app/components/filters/unsafe.fltr';

import AuthController from './auth/services/auth.ctrl';
import AuthFactory from './auth/services/auth.fctr';
import AuthStateFactory from './auth/services/auth-state.fctr';
import LoginController from './auth/login/login.ctrl';
import SignupController from './auth/signup/signup.ctrl';
import ProfileController from './auth/profile/profile.ctrl';
import ProfileFactory from './auth/profile/profile.fctr';

angular.module('metromed', ['ui.router', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 
														'ngMaterial', 'uiGmapgoogle-maps', 'firebase'])
	.config(config)
	.config(routerConfig)
	.run(runBlock)

	.value('Navigation', Navigation)
	.value('Credentials', Credentials)
	.directive('toolbar', () => new ToolbarDirective())
	.directive('sidenav', () => new SidenavDirective())
	.directive('tabbar', () => new TabbarDirective())
	.directive('metromedFooter', () => new FooterDirective())
	.controller('GridBottomSheetCtrl', GridBottomSheetCtrl)

	.controller('MainController', MainController)
	.directive('layerslider', () => new LayersliderDirective())
	.directive('topSidebar', () => new TopSidebarDirective())
	.value('TopSidebar', TopSidebar)
	.directive('quote', () => new QuoteDirective())
	.value('Quote', Quote)
	.directive('customServices', () => new CustomServicesDirective())
	.value('CustomServices', CustomServices)
	.directive('medicalSchool', () => new MedicalSchoolDirective())
	.value('MedicalSchool', MedicalSchool)
	.directive('testimonials', () => new TestimonialsDirective())
	.value('Testimonials', Testimonials)

	.controller('AboutUsController', AboutUsController)
	.factory('AboutUs', () => new AboutUsFactory())
	.controller('ServicesController', ServicesController)
	.factory('Services', () => new ServicesFactory())
	.factory('Doctors', () => new DoctorsFactory())
	.controller('DoctorsController', DoctorsController)
	.controller('DoctorController', DoctorController)
	.controller('PrimaryCareController', PrimaryCareController)
	.controller('MapController', MapController)
	.controller('VirtualTourController', VirtualTourController)
	.filter('unsafe', ['$sce', ($sce) => new unsafeFilter($sce)])

	.controller('AuthController', AuthController)
	.factory('Auth', ['$firebaseAuth', ($firebaseAuth) => new AuthFactory($firebaseAuth)])
	.factory('AuthState', () => new AuthStateFactory())
	.controller('LoginController', LoginController)
	.controller('SignupController', SignupController)
	.controller('ProfileController', ProfileController)
	.factory('Profile', ['$firebaseObject', ($firebaseObject) => new ProfileFactory($firebaseObject)]);