app.controller("goodsCtrl", function($scope, $stateParams,$http) {
	$scope.goback = function() {
		window.history.back()
	}
	$scope.good = []
	$scope.goodsId = $stateParams.goodsId
	console.log($stateParams)
	$http.post("/api/carInfo/carInfoDetail", {
		goodsId: $scope.goodsId
	}).then(function(res) {
		$scope.good = res.data
		console.log($scope.good)
	}).catch(function(error) {
		console.log(error)
	})
})