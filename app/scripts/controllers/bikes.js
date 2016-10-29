'use strict';
/**
 * @ngdoc function
 * @name ang1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ang1App
 */

angular.module('ang1App').controller('BikesCtrl', function ($scope, $http) {
 	
  $scope.riderData = [];

  $scope.getRiders = function(){
 		$http.get('http://localhost:3000/getAllRiders').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.riderData = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(response);
  });

	};
  });