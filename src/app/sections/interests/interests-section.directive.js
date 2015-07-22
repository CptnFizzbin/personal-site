(function() {
  'use strict';

  angular
    .module('angular')
    .directive('interestsSection', interestsSection);

  /** @ngInject */
  function interestsSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/sections/interests/interests-section.html'
    };

    return directive;
  }

})();
