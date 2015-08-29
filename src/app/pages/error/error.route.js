(function() {
  'use strict';

  angular
    .module('portfolio')
    .config(ErrorRouteConfig);

  /** @ngInject */
  function ErrorRouteConfig($stateProvider) {
    $stateProvider
      .state('error', {
        url: '/error',
        abstract: true,
        template: '<ui-view></ui-view>',
        controller: 'ErrorController'
      })
      .state('error.404', {
        url: '/404',
        templateUrl: 'app/pages/error/error-404.html'
      });
  }
})();