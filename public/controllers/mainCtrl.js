angular.module('gameSiteApp')
    .controller('mainCtrl', function($scope, $http, $state){
      $scope.userSearch = function(searchSQL){
        $state.go('userSearch', {searchString: searchSQL})
      }

    });
