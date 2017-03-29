angular.module('gameSiteApp')
    .controller('accessorySearchCtrl', function($scope, accessorySearchSrvc){
        $scope.getAccessory = function(){
          accessorySearchSrvc.getAccessory()
        }
    })
