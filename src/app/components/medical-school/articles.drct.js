import articles from './articles';

class MedicalSchoolDirective {
	constructor () {
		'ngInject';

		let directive = {
			restrict: 'E',
			templateUrl: 'app/components/medical-school/articles.html',
			controller: MedicalSchoolController,
			controllerAs: 'ms',
			bindToController: true
		};

		return directive;
	}
}

class MedicalSchoolController {
	constructor () {
		'ngInject';

		this.articleIndex = 0;
		this.articlesQuantity = articles.length-2;
		this.article = articles[this.articleIndex];

		this.prevArticle = function(){
			this.articleIndex++;
			this.article = articles[this.articleIndex];
		};
		
		this.nextArticle = function(){
			this.articleIndex--;
			this.article = articles[this.articleIndex];
		};
	}
}

export default MedicalSchoolDirective;