angular.module('gameSiteApp')
    .service('individualItemSrvc', function($http){
      this.getIndividualItem = function(tableName, id){
        return $http.get('/getIndividualItem?tableName=' + tableName + '&itemid=' + id).then(function(response){
          return response.data[0];
        })
      }

      this.addToCart = function(itemID, platformid, table){
        $http.put('/addToCart', {itemID:itemID, platformid:platformid, tableName: table})
      }

      // this.addToCart = function(){
      //   $http.put('/addToCart')
      // }
    })
