(function() {
  'use strict';

  angular
    .module('portfolio')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/error/404');
  }

})();
