angular.module('gameSiteApp')
    .service('gameSearchSrvc', function($http){
      this.getGames = function(consoleType, item){
        return $http.get('/getGames?platformid=' + consoleType + '&item=' + item).then(function(response){
          return response.data;
        })
      }
    })
