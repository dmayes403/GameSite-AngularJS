angular.module('gameSiteApp')
    .controller('userSearchCtrl', function($scope, userSearchSrvc, $stateParams){
        $scope.userSearch = function(){
          userSearchSrvc.userSearch($stateParams).then(function(response){
            $scope.userSearchList = response
          })
        }

    })
