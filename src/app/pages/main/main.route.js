(function() {
  'use strict';

  angular
    .module('portfolio')
    .config(MainRouteConfig);

  /** @ngInject */
  function MainRouteConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainController'
      });
  }
})();