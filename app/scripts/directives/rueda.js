'use strict';

angular.module('directivasApp')
  .controller('RuedaCtrl', function ($scope) {
    $scope.rotating = false;
    $scope.toggle = function () {
      $scope.rotating = !$scope.rotating;
    };
  })
  .directive('rueda', function () {
    return {
      templateUrl: 'templates/rueda.html',
      controller: 'RuedaCtrl',
      restrict: 'E',
      link: function postLink() {}
    };
  });
