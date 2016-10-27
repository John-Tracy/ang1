'use strict';
/**
 * @ngdoc function
 * @name ang1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ang1App
 */

angular.module('ang1App').controller('BikesCtrl', function ($scope, $http) {
 	
    $scope.bikes = [
    {name:'yamaha', color:'blue' },
    {name:'kawasaki', color:'green' },
    {name:'suzuki', color:'yellow' },
    {name:'ktm', color:'orange' },
    {name:'honda', color:'red'}
  ];

  $scope.apiHit = function(){
  	console.log('happening?');
 		$http.get('http://localhost:3000/api').then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(response);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log(response);
  });

	};
  });