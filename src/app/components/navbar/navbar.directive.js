(function() {
  'use strict';

  angular
    .module('portfolio')
    .directive('spyNavbar', spyNavbar);

  /** @ngInject */
  function spyNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html'
    };

    return directive;
  }

})();
