angular.module('gameSiteApp')
    .controller('consoleSearchCtrl', function($scope, consoleSearchSrvc){
        $scope.getConsoles = function(){
          console.log('hello');
          consoleSearchSrvc.getConsoles().then(function(response){
            console.log(response);
            $scope.consoleSearch = response;
          })
        }

        $scope.getConsoles();

    })
