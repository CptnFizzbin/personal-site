(function() {
  'use strict';

  angular
    .module('angular')
    .directive('infoPaneStart', infoPaneStart);

  /** @ngInject */
  function infoPaneStart() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/info-pane/info-pane-start.svg'
    };

    return directive;
  }

})();
