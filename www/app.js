// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var RidemonApp = angular.module("RidemonApp", ["ionic", "ui.router", "firebase", "ngSanitize"]);
// angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

RidemonApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $urlRouterProvider.otherwise("/");

  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.requestRide', {
    url: '/request',
    views: {
      'tab-request': {
        templateUrl: 'components/request/tab-request.html'
      },
      controller: 'components/request/request.controller.js'
    }
  })

  .state('tab.pokedex', {
    url: '/pokedex',
    views: {
      'tab-pokedex': {
        templateUrl: 'components/pokedex/tab-pokedex.html'
      },
      controller: 'components/pokedex/pokedex.controller.js'
    }
  })
   
  .state('tab.leaderboard', {
    url: '/leaderboard',
    views: {
      'tab-leaderboard': {
        templateUrl: 'components/tab-leaderboard.html'
      },
      controller: 'components/leaderboard/leaderboard.controller.js'
    }
  });

  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/tab/request');

});
