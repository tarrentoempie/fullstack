(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoryStateController', CategoryStateController);

    CategoryStateController.$inject = ['categoryList'];
    function CategoryStateController(categoryList) {
        var categories = this;
        categories.categoryList = categoryList;
    }

})();