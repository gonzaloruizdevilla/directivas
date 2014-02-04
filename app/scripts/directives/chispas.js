'use strict';

angular.module('directivasApp')
  .directive('chispas', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('Mi primera directiva: chispas');
      }
    };
  });
