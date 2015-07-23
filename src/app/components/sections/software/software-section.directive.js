(function() {
  'use strict';

  angular
    .module('angular')
    .directive('softwareSection', softwareSection);

  /** @ngInject */
  function softwareSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sections/software/software-section.html'
    };

    return directive;
  }

})();
