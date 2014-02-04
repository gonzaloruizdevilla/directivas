'use strict';

var menu = [
  'Introducción',
  'Chispas'
];

angular.module('directivasApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'hljs'
])
  .constant('menu', menu)
  .config(function ($routeProvider) {
    var i;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ej0', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    for(i = 1; i <= menu.length; i++) {
      $routeProvider.when('/ej'+i, {
        templateUrl: 'views/ej'+ i +'.html',
        controller: 'Ej' + i + 'Ctrl'
      });
    }

  });
