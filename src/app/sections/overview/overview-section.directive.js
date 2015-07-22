(function() {
  'use strict';

  angular
    .module('angular')
    .directive('overviewSection', overviewSection);

  /** @ngInject */
  function overviewSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/sections/overview/overview-section.html'
    };

    return directive;
  }

})();
