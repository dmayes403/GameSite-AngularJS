angular.module('gameSiteApp', ['ui.router'])
  .config(function( $stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../home/home.html',
          controller: 'homeCtrl'
        })
        .state('gameSearch', {
          url: '/gameSearch?platformid&item',
          templateUrl: '../gameSearch/gameSearch.html',
          controller: 'gameSearchCtrl'
        })
        .state('accessorySearch', {
          url: '/accessorySearch?platformid',
          templateUrl: '../accessorySearch.html',
          controller: 'accessorySearchCtrl'
        })
        .state('individualItem', {
          url: '/individualItem/:id',
          templateUrl: '../individualItem.html',
          controller: 'individualItemCtrl'
        })

        $urlRouterProvider.otherwise('/');
  })
