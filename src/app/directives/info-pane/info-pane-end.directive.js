(function() {
  'use strict';

  angular
    .module('angular')
    .directive('infoPaneEnd', infoPaneEnd);

  /** @ngInject */
  function infoPaneEnd() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/info-pane/info-pane-end.svg'
    };

    return directive;
  }

})();
