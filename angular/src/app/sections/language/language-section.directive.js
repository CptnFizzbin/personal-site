(function() {
  'use strict';

  angular
    .module('angular')
    .directive('languageSection', languageSection);

  /** @ngInject */
  function languageSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/sections/language/language-section.html'
    };

    return directive;
  }

})();
