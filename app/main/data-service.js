(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name main.service:Data
   *
   * @description
   *
   */
  angular
    .module('main')
    .service('Data', Data);

  function Data() {
    var self = this;
    self.test = 'testies';

    self.get = function get() {
      return 'Data';
    };
  }

})();
