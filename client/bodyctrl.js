var app = angular.module('netflixapp', []);
app.controller('bodycontroller', function($scope,$http) {
   	$scope.option = ["Movie Id", "Language code"];
   	$scope.selectedByDefault = $scope.option[0];
   	$scope.searchCato = ["Movie Name","Language code","Image Type"];
   	$scope.selectedInSearch = $scope.searchCato[0];
    $http({
	  method: 'GET',
	  url: '/getJson'
	}).then(function successCallback(response) {
	    $scope.response = response.data;
	    $scope.langu = false;
    	$scope.movieId = true;
	  }, function errorCallback(response) {
	  	$scope.response = response.statusText;
	  });

	$scope.groupBy = function(){
    if($scope.selectedGroup == "Language code"){
    	$scope.langu = true;
    	$scope.movieId = false;
    }else{
    	$scope.langu = false;
    	$scope.movieId = true;
    }
  }

  $scope.imgDetails = function(){

  }
});

app.filter('groupBy', function () {
    return function (data, key) {
        if (!(data && key)) return;
        var result = {};
        for (var i=0;i<data.length;i++) {
            if (!result[data[i][key]])
                result[data[i][key]]=[];
            result[data[i][key]].push(data[i])
        }
        return result;
    };
});