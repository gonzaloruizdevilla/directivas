'use strict';

angular.module('directivasApp')
  .directive('simon', function ($q, $timeout, Tones) {
    return {
      templateUrl: 'templates/simon.html',
      restrict: 'E',
      scope: {
        'titulo': '@titulo',
        'fin': '&onEnd',
        'dificultad': '=dificultad'
      },
      link: function postLink(scope) {
        var partida,
          pasos,
          marcados,
          horaInicio,
          cuentaAtras,
          dificultades = [
            {iluminado: 1000, apagado: 500, esperaCuentaAtras: 5000},
            {iluminado: 700, apagado: 300, esperaCuentaAtras: 4000},
            {iluminado: 550, apagado: 200, esperaCuentaAtras: 2000},
            {iluminado: 400, apagado: 100, esperaCuentaAtras: 1000}
          ],
          iluminado = dificultades[0].iluminado,
          apagado = dificultades[0].apagado,
          esperaCuentaAtras = dificultades[0].esperaCuentaAtras;

        scope.$watch('dificultad', function (newValue){
          if(dificultades[newValue]){
            iluminado = dificultades[newValue].iluminado;
            apagado = dificultades[newValue].apagado;
            esperaCuentaAtras = dificultades[newValue].esperaCuentaAtras;
          }
        });

        function iluminaSecuencia(){
          var defer = $q.defer(),
            pendientes = pasos.slice();

          function siguiente(){
            if(pendientes.length === 0){
              defer.resolve();
            } else {
              scope.ilumina = pendientes.shift();
              Tones.play(scope.ilumina, iluminado);
              $timeout(function () {
                scope.ilumina = 0;
                $timeout(siguiente, apagado);
              }, iluminado);
            }
          }
          $timeout(siguiente, 1500);
          return defer.promise;
        }

        function agregaPaso(){
          scope.estado = 'mostrando';
          pasos.push(Math.ceil(Math.random()*4));
          iluminaSecuencia().then(function (){
            scope.estado = 'jugando';
            marcados = [];
            iniciaCuentaAtras();
          });
        }

        function cancelaCuentaAtras() {
          $timeout.cancel(cuentaAtras);
        }

        function iniciaCuentaAtras() {
          cuentaAtras = $timeout(function (){
            partida.resolve({tipo: 'tiempo'});
          }, esperaCuentaAtras);
        }

        function compruebaEntrada() {
          var i;
          for(i = 0;i < marcados.length; i++){
            if (marcados[i] !== pasos[i]) {
              partida.resolve({tipo: 'error', posicion: i});
              return;
            }
          }
          if (marcados.length === pasos.length){
            agregaPaso();
          } else {
            iniciaCuentaAtras();
          }
        }

        function iniciaPartida(){
          pasos = [];
          horaInicio = new Date();
          partida = $q.defer();
          agregaPaso();
          return partida.promise;
        }

        function finPartida(motivo){
          $timeout(function () {
            var resultado = {
              tiempo: Math.ceil(((new Date()) - horaInicio)/1000),
              movimientos: pasos.length,
              motivo: motivo,
              dificultad: scope.dificultad
            };

            scope.estado = 'esperando';
            scope.fin({resultado: resultado});

          }, 10);
        }

        scope.estado = 'esperando';

        scope.empieza = function () {
          if(scope.estado !== 'esperando') {
            return;
          }
          iniciaPartida().then(finPartida);
        };

        scope.click = function (cual){
          if (scope.estado !== 'jugando') {
            return;
          }
          Tones.play(cual, iluminado);
          marcados.push(cual);
          cancelaCuentaAtras();
          compruebaEntrada();
        };
      }
    };
  });
