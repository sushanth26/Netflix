var app = angular.module('netflixapp', []);
app.controller('bodycontroller', function($scope,$http) {
   	$scope.options = ["Movie Id", "Language code"];
   	$scope.selectedGroup = $scope.options[0];
    $http({
	  method: 'GET',
	  url: '/getJson'
	}).then(function successCallback(response) {
	    $scope.response = response.data;
	    $scope.language = false;
    	$scope.movieId = true;
  		//$scope.groups = Object.create(null);
		// for (var i = 0; i < $scope.response.length; i++) {
		//     var item = $scope.response[i];

		//     if(!$scope.groups[item.movieId]) {
		//         $scope.groups[item.movieId] = [];
		//     }

		//     $scope.groups[item.movieId].push({
		//         movieName: item.movieName,
		//         imageType: item.imageType,
		//         thumbnailUrl: item.thumbnailUrl,
		//         fullSizeImageUrl: item.fullSizeImageUrl,
		//         languageCode: item.languageCode
		//     });
		// }

		// $scope.result = [];

		// for (var x in $scope.groups) {
		//     var obj = {};
		//     obj[x] = $scope.groups[x];
		//     $scope.result.push(obj);
		// }

	  }, function errorCallback(response) {
	  	$scope.response = response.statusText;
	  });

	$scope.groupBy = function(){
    if($scope.selectedGroup == "Language code"){
    	$scope.language = true;
    	$scope.movieId = false;
    }else{
    	$scope.language = false;
    	$scope.movieId = true;
    }
  }
});