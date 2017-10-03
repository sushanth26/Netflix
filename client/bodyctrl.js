var app = angular.module('netflixapp', []);
app.controller('bodycontroller', function($scope,$http) {
   $scope.init = function(){
    $http({
	  method: 'GET',
	  url: '/getJson'
	}).then(function successCallback(response) {
	    $scope.response = response.data;
	  }, function errorCallback(response) {
	  	$scope.response = response.statusText;
	  });
	}
});