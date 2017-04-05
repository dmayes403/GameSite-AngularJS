angular.module('gameSiteApp')
    .controller('mainCtrl', function($scope, $http, $state){
      $scope.userSearch = function(searchSQL){
        $state.go('userSearch', {searchString: searchSQL})
      }

      // invoke mainSrvc function to get logged in user from an api route like /api/me or something
      // then set a user variable inside mainService
      // mainservice should have a method for returning the logged in user
      // you can set $scope.user here and refer to it as needed inside your html
    });
