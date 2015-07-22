(function() {
  'use strict';

  angular
    .module('angular')
    .directive('experienceSection', experienceSection);

  /** @ngInject */
  function experienceSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/sections/experience/experience-section.html'
    };

    return directive;
  }

})();
