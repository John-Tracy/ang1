'use strict';
/**
 * @ngdoc overview
 * @name ang1App
 * @description
 * # ang1App
 *
 * Main module of the application.
 */
angular
  .module('ang1App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).when('/bikes', {
        templateUrl: 'views/bikes.html',
        controller: 'BikesCtrl'
      }).when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  }]);
