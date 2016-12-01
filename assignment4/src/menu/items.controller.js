(function () {
    'use strict';

    angular.module('MenuApp')
    .controller('ItemStateController', ItemStateController);
    
    ItemStateController.$inject = ['itemList'];
    function ItemStateController(itemList) {
        var items = this;
        items.itemList = itemList;
    }
    
})();