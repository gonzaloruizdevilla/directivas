'use strict';

describe('Directive: chispas', function () {

  // load the directive's module
  beforeEach(module('directivasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chispas></chispas>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chispas directive');
  }));
});
