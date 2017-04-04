angular.module('gameSiteApp')
    .service('cartSrvc', function($http){
        this.getCart = function(id){
          return $http.get('/getCart/' + id).then(function(response){
            return response.data
          })
        }
    })
