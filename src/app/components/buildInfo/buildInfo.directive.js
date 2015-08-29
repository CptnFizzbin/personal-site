(function() {
  'use strict';

  angular
  .module('portfolio')
  .directive('spyBuildInfo', spyBuildInfo);

  /** @ngInject */

  function spyBuildInfo() {
    var directive = {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/buildInfo/buildInfo.html',
      controller: buildInfoCtrl
    };

    return directive;

    /** @ngInject */

    function buildInfoCtrl($scope, BuildInfoFctry) {
      BuildInfoFctry.get()
      .success(function(res) {
        $scope.buildInfo = res;
      });
    }
  }

})();