'use strict';

angular.module('directivasApp')
  .directive('card', function () {
    return {
      templateUrl: 'templates/card.html',
      restrict: 'E',
      transclude: true,
      link: function postLink() {}
    };
  });
