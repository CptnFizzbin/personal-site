(function() {
  'use strict';

  angular
    .module('angular')
    .directive('sectionStart', sectionEnd);

  /** @ngInject */
  function sectionEnd() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sections/section-start.svg'
    };

    return directive;
  }

})();
