'use strict';

angular.module('directivasApp')
  .directive('reloj', function () {
    return {
      template: '<div>Hora: {{hora | date: \'h:mm:ss a\'}}</div>',
      restrict: 'E',
      link: function postLink(scope) {
        scope.hora = new Date();
      }
    };
  });