angular.module('gameSiteApp')
    .service('purchaseHistorySrvc', function($http){

      this.getHistory = function(){
        console.log('history srvc')
        return $http.get('/getHistory').then(function(response){
          return response.data;
        })
      }

    })
