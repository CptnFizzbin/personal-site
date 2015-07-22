(function() {
  'use strict';

  angular
    .module('angular')
    .directive('infoPaneStart', infoPaneStart);

  /** @ngInject */
  function infoPaneStart() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/info-pane/info-pane-start.svg'
    };

    return directive;
  }

})();
