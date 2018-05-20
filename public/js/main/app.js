var app = angular.module("app.showhome", ["xeditable"]);

app.controller('productController', ['$scope', 'svProducts', function ($scope, svProducts) {
    $scope.appName = "Xiaomi Online";
    $scope.fromData = {};
    $scope.loading = true;
    $scope.products = [
        
    ];

    svProducts.get().then(function (data) {
        $scope.products = data.data;
        $scope.loading = false;
    });


}])