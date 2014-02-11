'use strict';

angular.module('directivasApp')
  .controller('Ej7Ctrl', function ($scope) {
    $scope.shared = {
      colors: [
        '#43a1cd',
        '#639b47',
        '#9ac147',
        '#e1e23b',
        '#f7941e',
        '#ba3e2e',
        '#9a1d34',
        '#662a6c',
        '#272b66',
        '#2d559f'
      ]
    };
    $scope.shared.color = $scope.shared.colors[0];
    $scope.nivel = 5;
  });
