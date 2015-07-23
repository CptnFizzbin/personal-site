(function() {
  'use strict';

  angular
    .module('angular')
    .directive('spyNavbar', spyNavbar);

  /** @ngInject */
  function spyNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {

    }
  }

})();
