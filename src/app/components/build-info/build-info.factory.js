(function() {
  'use strict';

  angular
    .module('angular')
    .factory('BuildInfoFctry', BuildInfoFctry);

  /** @ngInject */
  function BuildInfoFctry($http) {
    return {
      get: function () {
        return $http.get('/build-info.json');
      }
    }
  }

})();
