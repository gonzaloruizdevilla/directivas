'use strict';

angular.module('directivasApp')
  .controller('Ej9Ctrl', function ($scope) {
    var x = Math.ceil(5 * Math.random()),
        y = Math.ceil(5 * Math.random()),
        a1 = Math.ceil(5 * Math.random()),
        a2 = Math.ceil(5 * Math.random()),
        b1 = Math.ceil(5 * Math.random()),
        b2 = Math.ceil(5 * Math.random()),
        c1 = a1 * x + b1 * y,
        c2 = a2 * x - b2 * y;
    $scope.ecuaciones = [
      a1 + '*x + ' + b1 + '*y = ' + c1,
      a2 + '*x - ' + b2 + '*y = ' + c2
    ];
  });
