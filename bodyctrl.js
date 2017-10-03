var app = angular.module('netflixapp', []);
app.controller('bodycontroller', function($scope,$http) {
   $scope.init = function(){
    $http({
	  method: 'GET',
	  url: '/homepage'
	}).then(function successCallback(response) {
	    $scope.response = response;
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
	}
});