(function() {
  'use strict';

  angular
    .module('angular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $log) {
    $rootScope.$on('$stateChangeSuccess', function() {
       document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

    $log.debug('runBlock end');
  }

})();
