app.controller('detailCtrl',['$rootScope','$scope','$http','$location','$stateParams',function($rootScope,$scope,$http,$location,$stateParams){
	console.log("This is Detail Controller!....");

	$scope.id = $stateParams.id;
	console.log($scope.id);
}])