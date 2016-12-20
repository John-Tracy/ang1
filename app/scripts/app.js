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
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }).when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  }]);
