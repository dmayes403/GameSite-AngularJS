angular.module('gameSiteApp')
    .controller('accessorySearchCtrl', function($scope, accessorySearchSrvc, $stateParams){
        $scope.getAccessory = function(){
          accessorySearchSrvc.getAccessory($stateParams.platformid).then(function(response){
            $scope.accessorySearch = response;
          })
        }

        $scope.getAccessory();
    })
