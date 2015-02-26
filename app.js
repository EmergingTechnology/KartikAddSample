var myApp = angular.module('kartikModule', []);

myApp.controller('CtrlOne', ['$scope', function($scope) {
    $scope.add = function() {
        console.log('add');
        $scope.result = +$scope.num1 + +$scope.num2;
    };
}]);