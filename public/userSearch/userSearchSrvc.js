angular.module('gameSiteApp')
    .service('userSearchSrvc', function($http){
      this.userSearch = function(searchString){
        console.log(searchString)
        return $http.get('/userSearch/' + searchString).then(function(response){
          return response.data;
        })
      }
    })
