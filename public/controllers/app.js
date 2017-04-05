angular.module('gameSiteApp', ['ui.router'])
  .config(function( $stateProvider, $urlRouterProvider){
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../home/home.html',
          controller: 'homeCtrl',
        })
        .state('login', {
          // url: '/login',
          url: '/auth/facebook',
          templateUrl: '../login/login.html',
          controller: 'loginCtrl',
        })
        .state('signup', {
          url: '/signup',
          templateUrl: '../signup/signup.html',
          controller: 'signupCtrl',
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
        .state('userSearch', {
          url: '/userSearch/:searchString',
          templateUrl: '../userSearch/userSearch.html',
          controller: 'userSearchCtrl',
        })
        // .state('cart', {
        //   url: '/cart/:customerId',
        //   templateUrl: '../cart/cart.html',
        //   controller: 'cartCtrl',
        // })
        .state('cart', {
          url: '/cart',
          templateUrl: '../cart/cart.html',
          controller: 'cartCtrl',
        })

        $urlRouterProvider.otherwise('/');
  })
