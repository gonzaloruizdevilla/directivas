/*global webkitAudioContext*/

'use strict';

angular.module('directivasApp')
  .service('Tones', function Tones($timeout) {
    var context = new webkitAudioContext();
    function getFrequency(tone){
      switch(tone){
        case 1:
          return 329.628; //E: green
        case 2:
          return 440; //red A
        case 3:
          return 659.255; //E: blue
        case 4:
          return 554.365;//yellow c#, 277.183-554.365
      }
    }
    this.play = function (tone, time) {
      var oscillator = context.createOscillator();
      oscillator.connect(context.destination); // Connect to speakers
      oscillator.type = 3; //3 - Triangle wave
      oscillator.frequency.value = getFrequency(tone);
      oscillator.noteOn(0);// Start generating sound
      $timeout(function (){
        oscillator.noteOff(0);
      }, time);
    };
  });
