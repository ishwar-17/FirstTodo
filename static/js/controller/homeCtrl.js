app.controller('homeCtrl',['$rootScope','$scope','$http','$location',function($rootScope,$scope,$http,$location){
	console.log("This is home Controller..!!");

	$http.get("static/data/data.json").success(function(response){
		console.log(response);
		$scope.details = response;
	})
}])