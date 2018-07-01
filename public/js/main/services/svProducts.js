var app = angular.module("app.showhome")

app.factory("svProducts", ["$http", function ($http) {

    return {
        get: function () {
            return $http.get("/api/products");
        },
        getDetail: function (id) {
            return $http.get("/api/product/" + id);
        },
        create: function (productData) {
            return $http.post("/api/product", productData);
        },
        update: function (productData) {
            return $http.put ("/api/product", productData );
        },
        delete:  function(id){
            return $http.delete ("/api/product/" + id);
        }
    }
}]);