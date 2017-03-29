angular.module('gameSiteApp')
    .service('consoleSearchSrvc', function($http){
        this.getConsoles = function(consoleId){
          console.log('goodbye')
          return $http.get('/getConsoles').then(function(response){
            console.log('goodbye')
            return response.data;
          })
        }
    })
