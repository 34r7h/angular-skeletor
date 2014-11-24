(function () {
  'use strict';

  /* @ngdoc object
   * @name angular-skeletor
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('angular-skeletor', [
      'ui.router',
      'mm.foundation',
      'main'
    ]);

  angular
    .module('angular-skeletor')
    .config(config);

  function config($stateProvider, $urlRouterProvider, $controllerProvider) {
    var routes = [
        {name: 'services', type:'page'},
        {name: 'service', type:'item'},
        {name: 'search', type:'query'},
        {name: 'services', type:'admin'},
        {name: 'products', type:'page'},
        {name: 'product', type:'item'}
      ],
      services = ['data', 'api'],
      makeController = function (name, constructor) {
        $controllerProvider.register(name, constructor);
        return (this);
      },
      setController = function (route) {
        var name = route.name + 'Ctrl',
          fun = function ($scope, Api, $state) {
            console.log('route.type', route.type);
            console.log('$state', $state);
            $scope.state = $state;
            $scope.Api = Api;
          };
        makeController(name, fun);
      };
    console.log(services);

    angular.forEach(routes, function (route) {
      var stateName = route.name,
        routeUrl = (function () {
          if (route.type === 'page') {
            return '/' + route.name;
          } else if (route.type === 'item') {
            return '/' + route.name + '/:' + route.name;
          } else if (route.type === 'query') {
            return '/' + route.name + '/:' + route.name;
          } else if (route.type === 'admin') {
            stateName = 'admin.' + route.name;
            return '/' + route.name;
          }
        })(),
        templateUrl = 'main/' + route.type + '.tpl.html';
      setController(route);

      $stateProvider.state(stateName, {
        url: routeUrl,
        templateUrl: templateUrl,
        controller: route.name + 'Ctrl'
      });

    });
    $stateProvider.state('admin', {
      url: '/admin',
      template: '<div ui-view></div>',
      abstract: true
    });
    $urlRouterProvider.otherwise('/');
  }

})();
