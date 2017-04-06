angular.module('gameSiteApp')
    .controller('individualItemCtrl', function($scope, individualItemSrvc, $stateParams){
      console.log($stateParams)
      $scope.getIndividualItem = function(){
        individualItemSrvc.getIndividualItem($stateParams.tableName, $stateParams.itemid).then(function(response){
          $scope.individualItem = response;
          console.log(response);
        })
      }

      $scope.getIndividualItem();

      // $scope.addToCart = function(itemID, platformid, table){
      //   console.log(itemID,platformid, table);
      //   individualItemSrvc.addToCart(itemID,platformid, table);
      // }

      $scope.addToCart = function(accessoryID, itemID, consoleID){
        console.log(accessoryID, itemID, consoleID);
        individualItemSrvc.addToCart(accessoryID, itemID, consoleID);
      }

      $scope.alertCartAdd = function(itemName){
        console.log(itemName);
        alert(`${itemName} has been added to your cart!`)
      }

    })
