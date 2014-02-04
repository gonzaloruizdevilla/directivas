'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('directivasApp'));

  var MenuCtrl,
    scope,
    menu = [1,2];

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope,
      menu: menu
    });
  }));

  it('should attach a list of menu options to the scope', function () {
    expect(scope.menu.length).toBe(menu.length);
  });

});
