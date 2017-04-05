angular.module('gameSiteApp')
    .service('loginSrvc', function($http){
      console.log('helloooo');
        this.facebookLogin = function(){
          $http.get('/auth/facebook');
        }
    })
