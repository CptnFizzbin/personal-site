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
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/pages/projects/projects.html',
        controller: 'ProjectsCtrl'
      })
      .state('blog', {
        abstract: true,
        url: '/blog',
        templateUrl: 'app/pages/blog/blog.html',
        controller: 'BlogCtrl'
      })
      .state('blog.all', {
        url: '',
        templateUrl: 'app/pages/blog/blog.all.html',
      })
      .state('blog.post', {
        url: '/:slug',
        templateUrl: 'app/pages/blog/blog.post.html',
        controller: 'BlogPostCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
