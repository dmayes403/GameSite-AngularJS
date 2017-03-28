angular.module('gameSiteApp', ['ui.router'])
  .config(function( $stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../home/home.html',
          controller: 'homeCtrl'
        })
        .state('gameSearch', {
          url: '/gameSearch/:sql',
          templateUrl: '../gameSearch/gameSearch.html',
          controller: 'gameSearchCtrl'
        })

        $urlRouterProvider.otherwise('/');
  })
