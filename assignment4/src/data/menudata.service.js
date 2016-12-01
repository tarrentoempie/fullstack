(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('CATEGORY_ENDPOINT', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('ITEM_ENDPOINT', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=')



    MenuDataService.$inject = ['$http', 'CATEGORY_ENDPOINT', 'ITEM_ENDPOINT'];
    function MenuDataService($http, CATEGORY_ENDPOINT, ITEM_ENDPOINT) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                url: CATEGORY_ENDPOINT
            }).then(function (response) {
                return response.data;
            }).catch(function (response) {
                console.log(response);
                return response;
            });
        };
        
        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                url: ITEM_ENDPOINT + categoryShortName
            }).then(function (response) {
                return response.data.menu_items;
            }).catch(function (response) {
                console.log(response);
                return response;
            });
        };
        

    }
})();