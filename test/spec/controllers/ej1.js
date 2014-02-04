'use strict';

describe('Controller: Ej1Ctrl', function () {

  // load the controller's module
  beforeEach(module('directivasApp'));

  var Ej1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ej1Ctrl = $controller('Ej1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
