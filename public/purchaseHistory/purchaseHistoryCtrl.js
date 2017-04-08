angular.module('gameSiteApp')
    .controller('purchaseHistoryCtrl', function($scope, purchaseHistorySrvc){
        $scope.getHistory = function(){
          console.log('getting history... ctrl')
          purchaseHistorySrvc.getHistory().then((response) => $scope.customerHistory = response);
        }

        $scope.getHistory();
    })
