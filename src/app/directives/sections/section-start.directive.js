(function() {
  'use strict';

  angular
    .module('angular')
    .directive('sectionStart', sectionEnd);

  /** @ngInject */
  function sectionEnd() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/sections/section-start.svg'
    };

    return directive;
  }

})();
