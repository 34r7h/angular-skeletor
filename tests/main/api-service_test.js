/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('Api', function () {
  var service;

  beforeEach(module('main'));

  beforeEach(inject(function (Api) {
    service = Api;
  }));

  it('should equal Api', function () {
    expect(service.get()).toEqual('Api');
  });

});
