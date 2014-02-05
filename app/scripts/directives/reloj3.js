'use strict';

angular.module('directivasApp')
  .directive('reloj3', function () {
  return {
    templateUrl: 'templates/reloj3.html',
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
