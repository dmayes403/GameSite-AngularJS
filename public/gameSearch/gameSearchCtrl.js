angular.module('gameSiteApp')
    .controller('gameSearchCtrl', function($scope, mainSrvc, $stateParams){
      $scope.getGames = function(){
        // mainSrvc.getGames($stateParams.games);
        mainSrvc.getGames().then(function(response){
          console.log(response)
          return response;
        });
      }

      $scope.getGames();
    })
