(function() {
  'use strict';

  angular
    .module('angular')
    .directive('contactSection', contactSection);

  /** @ngInject */
  function contactSection() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sections/contact/contact-section.html'
    };

    return directive;
  }

})();
