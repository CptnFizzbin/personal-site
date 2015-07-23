(function() {
  'use strict';

  angular
    .module('angular')
    .directive('buildInfo', buildInfo);

  /** @ngInject */
  function buildInfo() {
    var directive = {
      restrict: 'E',
      scope: { },
      templateUrl: 'app/components/build-info/build-info.html',
      controller: buildInfoCtrl
    };

    return directive;

    /** @ngInject */
    function buildInfoCtrl ($scope, BuildInfoFctry) {
      BuildInfoFctry.get()
        .success(function (res) {
          $scope.buildInfo = res;
        });
    }
  }

})();
