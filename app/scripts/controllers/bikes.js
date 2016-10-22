'use strict';
/**
 * @ngdoc function
 * @name ang1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ang1App
 */
angular.module('ang1App').controller('BikesCtrl', function ($scope) {
 	
    $scope.bikes = [
    {name:'yamaha', color:'blue' },
    {name:'kawasaki', color:'green' },
    {name:'suzuki', color:'yellow' },
    {name:'ktm', color:'orange' },
    {name:'honda', color:'red'}
  ];

  console.log('working?')
  });