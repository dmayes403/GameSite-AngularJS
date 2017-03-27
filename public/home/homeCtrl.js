angular.module('gameSiteApp')
  .controller('homeCtrl', function($scope, mainSrvc){
    $scope.homeTest = 'homeTest';
    $scope.getTrendingGames = function(){
      mainSrvc.getTrendingGames().then(function(response){
        $scope.trendingGames = response;
        console.log(response);
      })
    }

    $scope.getTrendingGames();
  })
