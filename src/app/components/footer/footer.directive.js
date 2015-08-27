(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('spyFooter', spyFooter);

  /** @ngInject */
  function spyFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html'
    };

    return directive;
  }

})();
