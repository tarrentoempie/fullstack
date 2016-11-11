(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope']
    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.lunchMessage = '';
        $scope.commentOnLunch = function () {
            if ($scope.dishes == '') {
                $scope.lunchMessage = 'Please enter data first';
            }
            else {
                if ($scope.dishes.split(',').length > 3)
                    $scope.lunchMessage = 'Too much!';
                else
                    $scope.lunchMessage = 'Enjoy!';
            }

        };
    }

    function calcValue(string) {
        var totalValue = 0;
        for (var i = 0; i < string.length; i++) {
            totalValue += string.charCodeAt(i);
        }
        return totalValue;
    };

})();

