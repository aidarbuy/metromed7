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
	constructor (MedicalSchool) {
		'ngInject';

		this.articleIndex = 0;
		this.articlesQuantity = MedicalSchool.length;
		this.article = MedicalSchool[this.articleIndex];

		this.prevArticle = function(){
			this.articleIndex++;
			this.article = MedicalSchool[this.articleIndex];
		};
		
		this.nextArticle = function(){
			this.articleIndex--;
			this.article = MedicalSchool[this.articleIndex];
		};
	}
}

export default MedicalSchoolDirective;