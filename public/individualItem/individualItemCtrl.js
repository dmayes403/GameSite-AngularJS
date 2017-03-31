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
    })
