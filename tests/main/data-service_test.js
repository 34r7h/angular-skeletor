/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('Data', function () {
  var service;

  beforeEach(module('main'));

  beforeEach(inject(function (Data) {
    service = Data;
  }));

  it('should equal Data', function () {
    expect(service.get()).toEqual('Data');
  });

});
