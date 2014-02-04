'use strict';

angular.module('directivasApp')
  .directive('reloj2', function () {
    return {
      template: '<div>Hora: {{hora | date: \'h:mm:ss a\'}} <button>Actualizar</button></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        scope.hora = new Date();
        element.find('button').click(function (){
          scope.$apply(function() {
            scope.hora = new Date();
          });
        });
      }
    };
  });
