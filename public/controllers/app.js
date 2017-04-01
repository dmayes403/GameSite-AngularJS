angular.module('gameSiteApp', ['ui.router'])
  .config(function( $stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../home/home.html',
          controller: 'homeCtrl',
        })
        .state('accessorySearch', {
          url: '/accessorySearch?platformid',
          templateUrl: '../accessorySearch/accessorySearch.html',
          controller: 'accessorySearchCtrl',
        })
        .state('gameSearch', {
          url: '/gameSearch?platformid?item',
          // url: '/gameSearch',
          // params: {
          //   platformid: 1,
          //   item: 'games',
          // },
          templateUrl: '../gameSearch/gameSearch.html',
          controller: 'gameSearchCtrl',
        })
        .state('consoleSearch', {
          url: '/consoleSearch',
          templateUrl: '../consoleSearch/consoleSearch.html',
          controller: 'consoleSearchCtrl',
        })
        .state('individualItem', {
          url: '/individualItem?tableName?itemid',
          // params: {
          //   platformid: 1,
          //   itemid: 1,
          // },
          templateUrl: '../individualItem/individualItem.html',
          controller: 'individualItemCtrl',
        })

        $urlRouterProvider.otherwise('/');
  })
