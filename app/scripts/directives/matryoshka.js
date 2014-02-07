'use strict';

angular.module('directivasApp')
  .directive('matryoshka', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the matryoshka directive');
      }
    };
  });
