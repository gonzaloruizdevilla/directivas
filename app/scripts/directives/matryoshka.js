'use strict';

angular.module('directivasApp')
  .directive('matryoshka', function ($compile) {
    return {
      templateUrl: 'templates/matryoshka.html',
      restrict: 'E',
      link: function postLink(scope, element) {
        var colors = scope.shared.colors,
            template = '<matryoshka/>',
            childDoll;
        scope.open = false;
        scope.nivel = scope.nivel - 1;
        if(scope.nivel > 1) {
          childDoll = angular.element(template);
          $compile(childDoll)(scope.$new());
          element.find('.childdoll').append(childDoll);
        }


        scope.size = scope.nivel * 50;
        scope.changeColor = function () {
          scope.open = !scope.open;
          scope.shared.color = colors[(colors.indexOf(scope.shared.color) + 1) % colors.length];
        };
      }
    };
  });
