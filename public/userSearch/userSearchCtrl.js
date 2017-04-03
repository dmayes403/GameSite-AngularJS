angular.module('gameSiteApp')
    .controller('userSearchCtrl', function($scope, userSearchSrvc, $stateParams){
        $scope.userSearch = function(){
          const searchSQL = $stateParams.searchString.toUpperCase();
          userSearchSrvc.userSearch(searchSQL).then(function(response){
            $scope.userSearchList = response
            console.log($scope.userSearchList)
          })
        }

        $scope.userSearch()

    })
