(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('MenuURL', 'https://davids-restaurant.herokuapp.com/menu_items.json')
        .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };

        return ddo;
    }
    

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var control = this;
        control.found = [];
        control.searchTerm = ''
        control.nothingFound = false;
        
        control.narrowItDown = function () {
            control.nothingFound = false
            MenuSearchService.getMatchedMenuItems(control.searchTerm).then(function (foundList) {
                control.found = foundList;
                control.nothingFound = (foundList.length === 0);
            }).catch(function (error) {
                console.log(error);
            });
        };

        control.remove = function (index) {
            control.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'MenuURL']
    function MenuSearchService($http, MenuURL) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            var response = $http({
                url: MenuURL
            });

            return response.then(function (result) {
                var foundItems = [];
                
                if (searchTerm === "") return foundItems;

                for (var i=0; i<result.data.menu_items.length; i++) {
                    var item = result.data.menu_items[i];
                    if (item.description.indexOf(searchTerm) != -1) {
                        foundItems.push(item);
                    }
                }
                return foundItems;
            });
        }

    }



})();