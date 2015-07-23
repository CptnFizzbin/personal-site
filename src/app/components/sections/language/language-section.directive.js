(function() {
  'use strict';

  angular
    .module('angular')
    .directive('languageSection', languageSection);

  /** @ngInject */
  function languageSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sections/language/language-section.html'
    };

    return directive;
  }

})();
