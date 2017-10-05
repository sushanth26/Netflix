var app = angular.module('netflixapp', []);
app.controller('bodycontroller', function($scope,$http,$window) {
	$scope.showdetails = false;
	$scope.langu = false;
    $scope.movieId = false;
   	$scope.option = ["Movie Id", "Language code"];
   	$scope.selectedGrouping = $scope.option[0];
   	$scope.searchCato = ["Movie Name","Language code","Image Type"];
   	$scope.selectedInSearch = $scope.searchCato[0];
   	document.getElementById("mainBody").style.overflowY = "scroll";
    $http({
	  method: 'GET',
	  url: '/getJson'
	}).then(function successCallback(response) {
	    $scope.response = response.data;
	    $scope.langu = false;
    	$scope.movieId = true;
	  }, function errorCallback(response) {
	  	alert(response.statusText);
	  });

	$scope.groupBy = function(){
    if($scope.selectedGrouping == "Language code"){
    	$scope.langu = true;
    	$scope.movieId = false;
    }else{
    	$scope.langu = false;
    	$scope.movieId = true;
    }
  }

  $scope.close = function(item){
  	$scope.showdetails = false;
  	document.getElementById("mainBody").style.overflowY = "scroll";
  }
  $scope.imgDetails = function(item){
  	$scope.showdetails = true;
  		$scope.movieDetails =  item;
  		document.getElementById("mainBody").style.overflowY = "hidden";
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