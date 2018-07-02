var app = angular.module("app.showhome")


app.service('PlayerDetails', ['$http', function($http){
    return {
         get: function(id) {
           return $http({
            url: '/api/product/:id',
            params: {id: id},
            method: 'GET'
           });
         }
    };
}]);
