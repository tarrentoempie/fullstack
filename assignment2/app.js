(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        
        toBuy.list = ShoppingListCheckOffService.listToBuy;
        toBuy.purchase = ShoppingListCheckOffService.purchase;
    }
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        
        bought.list = ShoppingListCheckOffService.listBought;
        
    }

    function ShoppingListCheckOffService() {
        var service = this;
        
        service.listToBuy = initialList();
        service.listBought = [];
        
        service.purchase = function(index) {
            var boughtItem = service.listToBuy[index];
            service.listToBuy.splice(index,1);
            service.listBought.push(boughtItem);
        };
    }
    
    function initialList() {
        var shoppingList = [
            {
                name: 'cookies',
                quantity: 10
            },
            {
                name: 'biscuits',
                quantity: 20
            }, 
            {
                name: 'rusks',
                quantity: 30
            }, 
            {
                name: 'doughnuts',
                quantity: 40
            }, 
            {
                name: 'croissants',
                quantity: 50
            }   
        ]
        return shoppingList;
    } 

})();