angular.module('gameSiteApp')
    .controller('gameSearchCtrl', function($scope, gameSearchSrvc, $stateParams){
      $scope.getGames = function(){
        // mainSrvc.getGames($stateParams.games);
        gameSearchSrvc.getGames($stateParams.platformid, $stateParams.item).then(function(response){
          $scope.gameSearch = response;
        });
      }

      $scope.getGames();
    })
