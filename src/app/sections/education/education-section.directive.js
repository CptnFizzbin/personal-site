(function() {
  'use strict';

  angular
    .module('angular')
    .directive('educationSection', educationSection);

  /** @ngInject */
  function educationSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/sections/education/education-section.html'
    };

    return directive;
  }

})();
