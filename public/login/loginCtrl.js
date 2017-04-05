angular.module('gameSiteApp')
    .controller('loginCtrl', function($scope, loginSrvc, $stateParams){
        $scope.facebookLogin = function(){
          console.log('this is working');
          loginSrvc.facebookLogin()
        }

        $scope.facebookLogin();
    })
