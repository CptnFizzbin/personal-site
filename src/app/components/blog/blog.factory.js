(function() {
  'use strict';

  angular
    .module('angular')
    .factory('BlogFctry', BlogFctry);

  /** @ngInject */
  function BlogFctry($http) {
    return {
      getAll: function () {
        return $http.get('/content/blog/posts.json');
      }
    }
  }

})();
