angular.module('gameSiteApp')
    .service('mainSrvc', function($http){

      this.getTrendingGames = function(){
        return $http.get('/getTrendingGames').then(function(response){
          return response.data;
        })
      }

      // this.getGames = function(sqlTable){
      //   return $http.get('/getGames/' + sqlTable).then(function(response){
      //     return response;
      //   })
      // }

      this.getGames = function(){
        return $http.get('/getGames').then(function(response){
          return response.data;
        })
      }
    })
