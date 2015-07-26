(function() {
  'use strict';

  angular
    .module('angular')
    .controller('BlogPostCtrl', BlogPostCtrl);

  /** @ngInject */
  function BlogPostCtrl($scope, $state, $stateParams, BlogFctry) {
    function init () {
      BlogFctry.getAll()
        .success(function (res) {
          $scope.blogPosts = res;
          transition();
        });
    }

    function transition () {
      if($stateParams.slug) {
        $scope.post = findPostBySlug($stateParams.slug);
      }
    }

    function findPostBySlug(slug) {
      for (var index = 0; index < $scope.blogPosts.length; index++) {
        var post = $scope.blogPosts[index];

        if(post.slug === slug) {
          return post;
        }
      }
    }

    init();
  }
})();
