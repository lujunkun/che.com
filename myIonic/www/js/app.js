var app = angular.module('starter', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
    url: '/home',
    abstract:true,
    templateUrl: 'views/home/home.html'
  }).state('home.rate', {
    url: '/rate',
    views:{
    	"home-rate":{
         templateUrl: 'views/rate/rate.html'    		
    	}
    }
  }).state('home.help', {
    url: '/help',
    views:{
    	"home-rate":{
         templateUrl: 'views/help/help.html'    		
    	}
    }
  }).state('home.find', {
    url: '/find',
    views:{
    	"home-rate":{
         templateUrl: 'views/find/find.html',
         controller:"findCtrl"
    	}
    }
    
  }).state('home.me', {
    url: '/me',
    views:{
    	"home-rate":{
         templateUrl: 'views/me/me.html'
    	}
    }
  }).state('cars', {
    url: '/cars/:pageNumber/:brandId/:carModel/:priceTypeId/:seriesId/:carTag',
    views:{
    	"":{
         templateUrl: 'views/cars/cars.html',
         controller:"carsCtrl"
    	}
    }
  }).state('goods', {
    url: '/goods/:goodsId',
    views:{
    	"":{
         templateUrl: 'views/goods/goods.html',
         controller:"goodsCtrl"
    	}
    }
  }).state('typeNav', {
    url: '/typeNav',
    views:{
    	"":{
         templateUrl: 'views/typeNav/typeNav.html',
         controller:"typeNavCtrl"
    	}
    }
  })
  $urlRouterProvider.otherwise('/home/rate');

});
app.filter("toHttp",function(){
	return function(val){
//		console.log(val)
		return "http://img.che.com/" + val
	}
})
app.filter("toPrice",function(){
	return function(val){
		return "￥" + (val / 10000).toFixed(2) + "万"
	}
})
//pageNumber = 0,brandId ='',carModel ='',priceTypeId ='2',seriesId =''