(function() {
  'use strict';

  angular
    .module('angular')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('resume', {
        url: '/resume',
        templateUrl: 'app/resume/resume.html',
        controller: 'ResumeCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
