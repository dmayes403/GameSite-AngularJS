angular.module('gameSiteApp')
    .controller('mainCtrl', function($scope, $http, $state, cartSrvc){
      $scope.userSearch = function(searchSQL){
        $state.go('userSearch', {searchString: searchSQL})
      }

      $scope.cartCount = function(){
        cartSrvc.getCart().then(function(response){
          $scope.cartCounter = response.length;
          // console.log(response.length)
        })
      }

      $scope.cartCount();

      // invoke mainSrvc function to get logged in user from an api route like /api/me or something
      // then set a user variable inside mainService
      // mainservice should have a method for returning the logged in user
      // you can set $scope.user here and refer to it as needed inside your html
    });
