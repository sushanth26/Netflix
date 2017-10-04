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
    	$scope.movieids = [];
    	$scope.dataByMovieId = [];

    	for(i=0;i<$scope.response.length;i++){
    		if($scope.movieids.includes($scope.response[i].movieId) == false){
    			$scope.movieids.push($scope.response[i].movieId);
    			$scope.dataByMovieId.push($scope.response[i].movieId);
    		}
    			if($scope.dataByMovieId[0]==$scope.response[i].movieId){
    				$scope.dataByMovieId[0].movieName= $scope.response[i].movieName
	    			/*$scope.dataByMovieId[0].push($scope.response[i].imageType)
	    			$scope.dataByMovieId[0].push($scope.response[i].thumbnailUrl)
	    			$scope.dataByMovieId[0].push($scope.response[i].fullSizeImageUrl)
	    			$scope.dataByMovieId[0].push($scope.response[i].languageCode)*/
	    	}
	    }


    	$scope.movieimages = [
    		{
    			70178217 :[
    			{
    				"movieName": "House of Cards",
					"imageType": "sdp",
					"thumbnailUrl": "http://art.nflximg.net/29431/c6bad706155b1e543afb4ea875ae0ad136029431.jpg",
					"fullSizeImageUrl": "http://art.nflximg.net/de7dc/8aa6a12931b3452bbacdede6fa7159f40f0de7dc.jpg",
					"languageCode": "ar"
    			},
    			{
    				"movieName": "House of Cards",
					"imageType": "sdp",
					"thumbnailUrl": "http://art.nflximg.net/77174/d864898dbddf59235850dfdbbdd69a1e0d677174.jpg",
					"fullSizeImageUrl": "http://art.nflximg.net/68e0a/c661414cab769682b612c8521a4026b356668e0a.jpg",
					"languageCode": "en"
    			}
    			]
    		},
    		{
    			70178217 :[
    			{
    				"movieName": "House of Cards",
					"imageType": "sdp",
					"thumbnailUrl": "http://art.nflximg.net/29431/c6bad706155b1e543afb4ea875ae0ad136029431.jpg",
					"fullSizeImageUrl": "http://art.nflximg.net/de7dc/8aa6a12931b3452bbacdede6fa7159f40f0de7dc.jpg",
					"languageCode": "ar"
    			},
    			{
    				"movieName": "House of Cards",
					"imageType": "sdp",
					"thumbnailUrl": "http://art.nflximg.net/77174/d864898dbddf59235850dfdbbdd69a1e0d677174.jpg",
					"fullSizeImageUrl": "http://art.nflximg.net/68e0a/c661414cab769682b612c8521a4026b356668e0a.jpg",
					"languageCode": "en"
    			}
    			]
    		}

    	];
    		

	    $scope.HOC = [];
    	$scope.OINB = [];
    	$scope.MP = [];
    	$scope.LH = [];
    	$scope.AD = [];

    	for(i=0;i<$scope.response.length;i++){
    		if($scope.response[i].movieId == 70242311){
    			$scope.OINB.push($scope.response[i]);
    		}else if($scope.response[i].movieId == 70178217){
    			$scope.HOC.push($scope.response[i]);
    		}else if($scope.response[i].movieId == 70305883){
    			$scope.MP.push($scope.response[i]);
    		}else if($scope.response[i].movieId == 70140358){
    			$scope.AD.push($scope.response[i]);
    		}else {
    			$scope.LH.push($scope.response[i]);
    		}  
    	}
	  }, function errorCallback(response) {
	  	$scope.response = response.statusText;
	  });

	$scope.groupBy = function(){
    if($scope.selectedGroup == "Language code"){
    	$scope.language = true;
    	$scope.movieId = false;

    	$scope.it = [];
    	$scope.tr = [];
    	$scope.ja = [];
    	$scope.de = [];
    	$scope.da = [];
    	$scope.pt = [];
    	$scope.pl = [];
    	$scope.nb = [];
    	$scope.ar = [];
    	$scope.en = [];
    	$scope.zhHans = [];
    	$scope.ptBR = [];
    	$scope.nl = [];
    	$scope.es = [];
    	$scope.esES = [];
    	$scope.fi = [];
    	$scope.ko = [];
    	$scope.zhHant = [];
    	$scope.frCA = [];
    	$scope.fr = [];
    	$scope.sv = [];
   
    	for(i=0;i<$scope.response.length;i++){
    		if($scope.response[i].languageCode == "it"){
    			$scope.it.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "tr"){
    			$scope.tr.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "ja"){
    			$scope.ja.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "de"){
    			$scope.de.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "da"){
    			$scope.da.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "pt"){
    			$scope.pt.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "pl"){
    			$scope.pl.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "nb"){
    			$scope.nb.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "ar"){
    			$scope.ar.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "en"){
    			$scope.en.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "zh-Hans"){
    			$scope.zhHans.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "sv"){
    			$scope.sv.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "pt-BR"){
    			$scope.ptBR.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "nl"){
    			$scope.nl.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "es"){
    			$scope.es.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "fi"){
    			$scope.fi.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "es-ES"){
    			$scope.esES.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "ko"){
    			$scope.ko.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "zh-Hant"){
    			$scope.zhHant.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "fr"){
    			$scope.fr.push($scope.response[i]);
    		}else if($scope.response[i].languageCode == "fr-CA"){
    			$scope.frCA.push($scope.response[i]);
    		}  
    	}
    	
    	
    }else{
    	$scope.language = false;
    	$scope.movieId = true;
    }
  }
});