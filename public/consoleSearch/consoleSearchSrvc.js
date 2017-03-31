angular.module('gameSiteApp')
    .service('consoleSearchSrvc', function($http){
        this.getConsoles = function(consoleId){
          return $http.get('/getConsoles').then(function(response){
            return response.data;
          })
        }
    })
