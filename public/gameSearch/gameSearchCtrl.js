angular.module('gameSiteApp')
    .controller('gameSearchCtrl', function($scope, mainSrvc, $stateParams){
      $scope.getGames = function(){
        // mainSrvc.getGames($stateParams.games);
        mainSrvc.getGames($stateParams.platformid, $stateParams.item).then(function(response){
          $scope.gameSearch = response;
        });
      }

      $scope.getGames();
    })
