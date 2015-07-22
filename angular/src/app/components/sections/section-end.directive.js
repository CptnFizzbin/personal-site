(function() {
  'use strict';

  angular
    .module('angular')
    .directive('sectionEnd', sectionEnd);

  /** @ngInject */
  function sectionEnd() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sections/section-end.svg'
    };

    return directive;
  }

})();
