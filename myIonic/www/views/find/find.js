app.controller("findCtrl", function($scope, $http, $ionicPlatform, $ionicActionSheet) {
	//	http://carapi.che.com/carInfo/searchCarInfoList  http://carapi.che.com/carInfo/searchCarInfoList
	//console.log($scope)
	$scope.data1 = []
	$scope.num = 0
	$scope.isshows = false
	$scope.show = function(){
	    $scope.data1 = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "5万以下", "5-10万", "10-15万", "15-20万", "20-25万", "25-30万", "30-35万", "35-40万", "40-45万", "45-50万", "50-55万", "55-60万","60万以上", " ", " "]
		$scope.isshows = true
	}
	$scope.show1 = function(){
	    $scope.data1 = [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "不限", "紧凑型SUV", "跑车", "中型SUV", "紧凑型车", "小型SUV", "中大型SUV", "小型车", "大型SUV", "MPV", "中大型车", "中型车", "微面", "大型车", "微型车"]
		$scope.isshows = true
	}
	$scope.hide = function(){
		$scope.isshows = false
	}
	$scope.next = function() {
		if($scope.num > 13) return
		$scope.num++
			$scope.data1.splice(0, 1)
		$scope.data1.splice($scope.data1.length, 0, " ")
		console.log($scope.data1[14])
	}
	$scope.prev = function() {
		if($scope.num <= 0) return
		$scope.num--
			var arr = $scope.data1
		arr.splice(0, 0, " ")
		arr.splice($scope.data1.length - 1, 1)
		console.log($scope.data1[14])
	}
	$scope.goback = function(){
		window.history.back()
	}
	//需要传递的参数
	$scope.pageNumber = 0
	$scope.brandId = ""
	$scope.carModel = ""
	$scope.priceTypeId = ""
	$scope.seriesId = ""

	$scope.data = []
	$scope.load = function() {
		$scope.pageNumber++
			$http.post("/api/carInfo/searchCarInfoList", {
				brandId: $scope.brandId,
				carModel: $scope.carModel,

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
    document.querySelector("#bottonBar").onscroll = function(){
    	var scr = document.querySelector("#bottonBar")
    	var body  = document.querySelector("body")
    	console.log(body.scrollTop)
    	console.log(scr.scrollTop)
    }
})