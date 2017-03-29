angular.module('gameSiteApp', ['ui.router'])
  .config(function( $stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../home/home.html',
          controller: 'homeCtrl'
        })
        .state('accessorySearch', {
          url: '/accessorySearch?platformid',
          templateUrl: '../accessorySearch/accessorySearch.html',
          controller: 'accessorySearchCtrl'
        })
        .state('gameSearch', {
          url: '/gameSearch?platformid&item',
          templateUrl: '../gameSearch/gameSearch.html',
          controller: 'gameSearchCtrl'
        })
        .state('consoleSearch', {
          url: '/consoleSearch?id',
          controller: 'consoleSearchCtrl'
        })
        .state('individualItem', {
          url: '/individualItem/:id',
          templateUrl: '../individualItem.html',
          controller: 'individualItemCtrl'
        })

        $urlRouterProvider.otherwise('/');
  })
