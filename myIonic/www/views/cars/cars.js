app.controller("carsCtrl",function($scope,$ionicNavBarDelegate, $http,$ionicPlatform,$ionicActionSheet,$stateParams){
	console.log($stateParams)
	$scope.goback = function(){
//		 $ionicNavBarDelegate.back();
            window.history.back()
	}
	$scope.pageNumber = $stateParams.pageNumber
	$scope.brandId = $stateParams.brandId
	$scope.carModel = $stateParams.carModel 
	$scope.priceTypeId = $stateParams.priceTypeId
	$scope.seriesId = $stateParams.seriesId
	$scope.carTag = $stateParams.carTag

	$scope.data = []
	$scope.load = function() {
		$scope.pageNumber++
			$http.post("/api/carInfo/searchCarInfoList", {
				brandId: $scope.brandId,
				carModel: $scope.carModel,
                carTag: $stateParams.carTag,
				pageNumber: $scope.pageNumber,
				pageSize: 10,

				priceTypeId: $scope.priceTypeId,
				seriesId: $scope.seriesId
			}).then(function(res) {
				if($scope.pageNumber < 2) {
					$scope.data = []
					$scope.data = $scope.data.concat(res.data)
				} else {
					$scope.data = $scope.data.concat(res.data)
				}
				console.log($scope.data)
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}).catch(function(error) {
				console.log(error)
			})
	}
	$scope.$on('stateChangeSuccess', function() {
		$scope.load();
	});
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
