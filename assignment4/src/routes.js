(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/menu/templates/home.state.html',
      })
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menu/templates/categories.state.html',
        controller: 'CategoryStateController as categories',
        resolve: {
          categoryList: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
          
        }
      })
      .state('categories.items', {
        url: '/items/{categoryShortName}',
        templateUrl: 'src/menu/templates/items.state.html',
        controller: 'ItemStateController as items',
        params: {
          categoryShortName: null
        },
        resolve: {
          itemList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
          }]
        }
      });
  }

})();
