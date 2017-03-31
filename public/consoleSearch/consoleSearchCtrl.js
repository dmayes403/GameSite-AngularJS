angular.module('gameSiteApp')
    .controller('consoleSearchCtrl', function($scope, consoleSearchSrvc){
        $scope.getConsoles = function(){
          consoleSearchSrvc.getConsoles().then(function(response){
            $scope.consoleSearch = response;
          })
        }

        $scope.getConsoles();

    })
