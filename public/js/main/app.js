var app = angular.module("app.showhome", ["xeditable"]);

// app.config(function($routeProvider, $locationProvider){
//     $routeProvider.when("/:id", {
//         controller: "productDetail"
//     });
// })

app.controller('productController', ['$scope', 'svProducts', function ($scope, svProducts) {
    $scope.brand = "Phan Nhân";
    $scope.appName = "Xiaomi Online";
    $scope.message = "This is display an product details";
    $scope.fromData = {};
    $scope.loading = true;
    $scope.products = [

    ];

    svProducts.get().then(function (data) {
        $scope.products = data.data;
        $scope.loading = false;
    });

}])

app.controller("productDetail", ['$scope', 'svProducts', function ($scope, svProducts) {
    // var self = this;
    $scope.brand = "Phan Nhân";
    $scope.appName = "Xiaomi Online";
    $scope.message = "This is display an product details";
    console.log($scope.message);
    console.log(id);
    
    svProducts.getDetail(id).then(function (data) {
        $scope.products = data.data;
        $scope.loading = false;
    });

}])
