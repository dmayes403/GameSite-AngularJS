angular.module('gameSiteApp')
    .service('individualItemSrvc', function($http){
      this.getIndividualItem = function(tableName, id){
        return $http.get('/getIndividualItem?tableName=' + tableName + '&itemid=' + id).then(function(response){
          return response.data[0];
        })
      }
    })
