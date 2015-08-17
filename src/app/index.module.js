import config from './index.config';
import routerConfig from './index.route';
import runBlock from './index.run';

import Navigation from '../app/components/navigation/navigation';
import Credentials from '../app/components/navigation/credentials';

import ToolbarDirective from '../app/components/toolbar/toolbar.drct';
import Toolbar from '../app/components/toolbar/toolbar';
import SidenavDirective from '../app/components/sidenav/sidenav.drct';
import TabbarDirective from '../app/components/tabbar/tabbar.drct';

import MainController from './main/main.controller';
import NavController from '../app/components/navbar/nav.controller';
import RevolutionSliderDirective from '../app/components/revolution/revolution.directive';
import TopSidebar from '../app/components/top-sidebar/top-sidebar';
import TopSidebarDirective from '../app/components/top-sidebar/top-sidebar.drct';
import Quote from '../app/components/quote/quote';
import QuoteDirective from '../app/components/quote/quote.drct';
import CustomServices from '../app/components/custom-services/custom-services';
import CustomServicesDirective from '../app/components/custom-services/custom-services.drct';
import MedicalSchoolDirective from '../app/components/medical-school/medical-school.directive';
import MedicalSchool from '../app/components/medical-school/medical-school';
import TestimonialsDirective from '../app/components/testimonials/testimonials.directive';
import Testimonials from '../app/components/testimonials/testimonials';

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
														'ngMaterial', 'ui.router', 'ngMdIcons', 'uiGmapgoogle-maps', 'firebase'])
	.config(config)
	.config(routerConfig)
	.run(runBlock)

	.value('Navigation', Navigation)
	.value('Credentials', Credentials)

	.directive('toolbar', () => new ToolbarDirective())
	.value('Toolbar', Toolbar)
	.directive('sidenav', () => new SidenavDirective())
	.directive('tabbar', () => new TabbarDirective())

	.controller('MainController', MainController)
	.controller('NavController', NavController)
	.directive('revolutionSlider', () => new RevolutionSliderDirective())
	.directive('topSidebar', () => new TopSidebarDirective())
	.value('TopSidebar', TopSidebar)
	.directive('quote', () => new QuoteDirective())
	.value('Quote', Quote)
	.value('CustomServices', CustomServices)
	.directive('customServices', () => new CustomServicesDirective())
	.directive('medicalSchool', () => new MedicalSchoolDirective())
	.value('MedicalSchool', MedicalSchool)
	.directive('testimonials', () => new TestimonialsDirective())
	.value('Testimonials', Testimonials)

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
