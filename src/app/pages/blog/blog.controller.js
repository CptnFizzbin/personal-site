(function() {
  'use strict';

  angular
    .module('angular')
    .controller('BlogCtrl', BlogCtrl);

  /** @ngInject */
  function BlogCtrl($scope, $state, $stateParams, BlogFctry, $log) {
    $log.info('BlogCtrl.init');
    BlogFctry.getAll()
      .success(function (res) {
        $scope.blogPosts = res;
      });
  }
})();
