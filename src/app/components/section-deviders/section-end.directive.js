(function() {
  'use strict';

  angular
    .module('angular')
    .directive('sectionEnd', sectionEnd);

  /** @ngInject */
  function sectionEnd() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/section-deviders/section-end.svg'
    };

    return directive;
  }

})();
