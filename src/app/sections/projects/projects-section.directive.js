(function() {
  'use strict';

  angular
    .module('angular')
    .directive('projectsSection', projectsSection);

  /** @ngInject */
  function projectsSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/sections/projects/projects-section.html'
    };

    return directive;
  }

})();
