'use strict';

angular.module('directivasApp')
  .factory('listen', function Listen($window, $q) {
      var SpeechRecognition =
        $window.SpeechRecognition ||
        $window.webkitSpeechRecognition;
      var recognizer = new SpeechRecognition(),
          listeners = [],
          listening = false;

      recognizer.onresult = function(e) {
        var result;
        if (e.results.length) {
          result = e.results[e.resultIndex];
          listeners.forEach(function (defer){
            defer.resolve(result[0].transcript);
          });
          listeners = [];
          listening = false;
        }
      };

      recognizer.onerror = function (e){
        listeners.forEach(function (defer){
          defer.reject(e);
        });
        listeners = [];
        listening = false;
      };

      function listen(){
        var defer = $q.defer();
        listeners.push(defer);
        if(!listening) {
          listening = true;
          recognizer.start();
        }
        return defer.promise;
      }

      return listen;
    });
