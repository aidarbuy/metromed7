class FooterDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'ft',
      bindToController: true
    };

    return directive;
  }
}

class FooterController {
  constructor () {
    'ngInject';

  }
}

export default FooterDirective;
