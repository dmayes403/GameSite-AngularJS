angular.module('gameSiteApp')
    .controller('cartCtrl', function($scope, cartSrvc, $stateParams, $q){
        // $scope.getCart = function(){
        //   cartSrvc.getCart($stateParams.customerId).then(function(response){
        //     $scope.customerCart = response;
        //     console.log($scope.customerCart);
        //   })
        // }

        $scope.totalValue = function(objArr){
          var value = 0;
          for (var i = 0; i < objArr.length; i++){
            if(objArr[i].accessory_price){
              value += +objArr[i].accessory_price;
            }
            else if (objArr[i].game_price){
              value += +objArr[i].game_price
            } else {
              value += +objArr[i].console_price;
            }
          }
          $scope.value = value;
          console.log($scope.value)
        }


        $scope.getCart = function(){
          cartSrvc.getCart().then(function(response){
            console.log(response)
            $scope.customerCart = response;
            $scope.totalValue(response)
          })
        }


        $scope.getCart();
        // $scope.totalValue($scope.customerCart);

        $scope.deleteCartItem = function(accessoryID, itemID, consoleID){
          cartSrvc.deleteCartItem(accessoryID, itemID, consoleID)
          $scope.getCart();
        }

        $scope.makePurchase = function(){
            cartSrvc.getCart().then(function(response){
              console.log('PURCHASING');
              var cartArr = response;
              // var purchasePromises = cartArr.map((item) => {
              //   return cartSrvc.makePurchase(item.accessory_id,item.game_id,item.console_id);
              // });
              // $q.all(purchasePromises).then(function(){
                var deletionPromises = cartArr.map((item) => {
                  return cartSrvc.deleteCartItem(item.accessory_id,item.game_id,item.console_id);
                });
                $q.all(deletionPromises).then(function(){
                  console.log('DONE DELETING');
                  $scope.getCart();
                });
              // });
          })
        }
    })
