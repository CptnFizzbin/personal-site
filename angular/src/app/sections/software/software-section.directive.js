(function() {
  'use strict';

  angular
    .module('angular')
    .directive('softwareSection', softwareSection);

  /** @ngInject */
  function softwareSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/sections/software/software-section.html'
    };

    return directive;
  }

})();
