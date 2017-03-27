angular.module('gameSiteApp')
    .service('mainSrvc', function($http){

      this.getTrendingGames = function(){
        return $http.get('/getTrendingGames').then(function(response){
          return response.data;
        })
      }
    })
