angular.module('gameSiteApp')
    .service('accessorySearchSrvc', function($http){
        this.getAccessory = function(consoleType){
          return $http.get('/getAccessories?platformid=' + consoleType).then(function(response){
            console.log(response.data);
            return response.data;
          })
        }
    })
