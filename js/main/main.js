(function () {
  'use strict';

  /* @ngdoc object
   * @name main
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('main', [
      'ui.router'
    ]);

  angular
    .module('main')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'main/main.tpl.html',
        controller: 'MainCtrl as main'
      });
  }

})();
