(function() {
  'use strict';

  angular
    .module('portfolio')
    .config(ResumeRouteConfig);

  /** @ngInject */
  function ResumeRouteConfig($stateProvider) {
    $stateProvider
      .state('resume', {
        url: '/resume',
        templateUrl: 'app/pages/resume/resume.html',
        controller: 'ResumeController'
      });
  }
})();