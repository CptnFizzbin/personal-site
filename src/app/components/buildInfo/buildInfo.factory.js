(function() {
  'use strict';

  angular
  .module('portfolio')
  .factory('BuildInfoFctry', BuildInfoFctry);

  /** @ngInject */

  function BuildInfoFctry($http) {
    return {
      get: function() {
        return $http.get('/build-info.json');
      }
    }
  }

})();