(function() {
  'use strict';

  angular
    .module('angular')
    .directive('sectionEnd', sectionEnd);

  /** @ngInject */
  function sectionEnd() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/section-dividers/section-end.svg'
    };

    return directive;
  }

})();
