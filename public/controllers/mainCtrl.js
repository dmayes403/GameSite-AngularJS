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

      // $scope.cartCount();
      setInterval(function(){ $scope.cartCount(); }, 500);
    });
