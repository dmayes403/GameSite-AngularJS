angular.module('gameSiteApp')
    .controller('cartCtrl', function($scope, cartSrvc, $stateParams){
        $scope.getCart = function(){
          cartSrvc.getCart($stateParams.customerId).then(function(response){
            $scope.customerCart = response;
          })
        }
    })
