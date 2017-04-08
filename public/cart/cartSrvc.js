angular.module('gameSiteApp')
    .service('cartSrvc', function($http){
        // this.getCart = function(id){
        //   return $http.get('/getCart/' + id).then(function(response){
        //     return response.data
        //   })
        // }

        this.getCart = function(){
          return $http.get('/getCart').then(function(response){
            return response.data
          })
        }

        this.deleteCartItem = function(accessoryID, itemID, consoleID){
          console.log(accessoryID, itemID, consoleID)
          $http.put('/deleteCartItem', {accessoryID:accessoryID, itemID:itemID, consoleID:consoleID})
        }

        this.makePurchase = function(accessoryID, gameID, consoleID){
          $http.post('/makePurchase', {accessoryID:accessoryID, gameID:gameID, consoleID:consoleID});
        }
    })
