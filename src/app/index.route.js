(function() {
  'use strict';

  angular
    .module('portfolio')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/error/404');
  }

})();
