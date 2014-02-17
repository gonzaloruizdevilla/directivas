'use strict';

angular.module('directivasApp')
  .controller('Ej8Ctrl', function ($scope) {
    var resultados = $scope.resultados = [];

    $scope.jugando = false;

    $scope.empieza = function(dificultad){
      $scope.dificultad = dificultad;
      $scope.jugando = true;
    };

    $scope.muestraResultado = function (resultado){
      $scope.jugando = false;
      $scope.resultado = resultado;
      resultados.push(resultado);
      resultados.sort(function (a, b){
        return a.movimientos - b.movimientos;
      });
      resultado.posicion = resultados.indexOf(resultado) + 1;
    };

  });