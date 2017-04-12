app.controller("typeNavCtrl",function($scope,$http){
	$scope.data = []
	$scope.goback = function() {
		window.history.back()
	}
	$http.post("/api/brand/brandList",{}).then(function(res) {
		$scope.data = res.data
		console.log($scope.data)
	}).catch(function(error) {
		console.log(error)
	})
})