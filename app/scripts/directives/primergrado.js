'use strict';

angular.module('directivasApp')
  .directive('primergrado', function (Listen, $parse) {
    return {
      templateUrl: 'templates/primergrado.html',
      restrict: 'A',
      replace: true,
      require: '?ngModel',
      scope: {
        primergrado: '='
      },
      link: function postLink(scope, element, attrs, ngModelCtrl) {

        var SOLUTION_REGEXP = new RegExp('x (\\d) y (\\d)');

        scope.pideSolucion = function () {
          scope.adelante = true;
          Listen.listen().then(function (result){
            var locals, match, correcto;

            scope.adelante = false;

            ngModelCtrl.$setValidity('valores', true);
            ngModelCtrl.$setViewValue(null);

            if (!(match = result.match(SOLUTION_REGEXP))) {
              ngModelCtrl.$setValidity('expresion', false);
            } else {
              ngModelCtrl.$setValidity('expresion', true);

              locals = {
                x: match[1],
                y: match[2]
              };

              correcto = scope.primergrado.every(function (ecuacion){
                return $parse(ecuacion.replace('=','=='))(locals);
              });

              if(correcto) {
                ngModelCtrl.$setViewValue(locals);
              } else {
                ngModelCtrl.$setValidity('valores', false);
              }
            }
          });
        };
      }
    };
  });
