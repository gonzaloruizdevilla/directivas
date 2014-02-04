'use strict';

angular.module('directivasApp')
  .controller('MenuCtrl', function ($scope, $location, menu) {
    $scope.menu = menu;
    $scope.active = function (index){
      var path = $location.path();
      if (!index){
        return path === '/' || path === '/ej0';
      }
      return path === ('/ej' + index);
    };
  });
