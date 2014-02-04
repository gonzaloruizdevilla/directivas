'use strict';

angular.module('directivasApp')
  .directive('chispas2', function () {
    return {
      replace: true,
      template: '<div></div>',
      restrict: 'EACM',
      link: function postLink(scope, element) {
        element.text('Mi segunda directiva: chispas2');
      }
    };
  });
