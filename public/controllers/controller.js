var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', ['$scope','$http',
	function($scope,$http){
	var refresh = function(){
		$http.get('/resume').success(function(response){
			$scope.resume = response;
			$scope.type = "";
		});
	};
	refresh();
	
	console.log("hello world from controller");
	
	$http.get('/resume').success(function(response){
		
		$scope.resume = response;
	});
		
}]);
