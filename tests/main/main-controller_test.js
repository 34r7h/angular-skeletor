/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('MainCtrl', function () {
  var ctrl;

  beforeEach(module('main'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('MainCtrl');
  }));

  it('should have ctrlName as MainCtrl', function () {
    expect(ctrl.ctrlName).toEqual('MainCtrl');
  });

});
