(function() {
  'use strict';

  angular
    .module('angular')
    .directive('sectionEnd', sectionEnd);

  /** @ngInject */
  function sectionEnd() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/sections/section-end.svg'
    };

    return directive;
  }

})();
