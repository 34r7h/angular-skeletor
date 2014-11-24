(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name main.service:Api
   *
   * @description
   *
   */
  angular
    .module('main')
    .service('Api', Api);

  function Api(Data) {
    var self = this,
    methods = ['create', 'read', 'update', 'destroy'];
    self.test = Data.test;

    angular.forEach(methods, function (method) {
      self[method] = function () {
        console.log('method', method);
      };
    });

    self.get = function get() {
      return 'Api';
    };
  }

})();
