angular.module('gameSiteApp')
    .controller('cartCtrl', function($scope, cartSrvc, $stateParams){
        // $scope.getCart = function(){
        //   cartSrvc.getCart($stateParams.customerId).then(function(response){
        //     $scope.customerCart = response;
        //     console.log($scope.customerCart);
        //   })
        // }

        $scope.getCart = function(){
          cartSrvc.getCart().then(function(response){
            console.log(response)
            $scope.customerCart = response;
          })
        }

        // $scope.totalValue = function(objArr){
        //   var value = 0;
        //   for(var i = 0; i < objArr.length; i++){
        //     for(var prop in i){
        //       value+= i[prop];
        //     }
        //   }
        //   $scope.value = value;
        // }

        $scope.getCart();
        // $scope.totalValue($scope.customerCart);
    })
