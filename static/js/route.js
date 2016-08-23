app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

	$stateProvider

	.state('home',{
		url: '/',
		templateUrl: 'views/home.html',
		controller:'homeCtrl'
	})
	.state('detail',{
		url:'/detail?id',
		templateUrl:'views/detail.html',
		controller: 'detailCtrl'
	})
	.state('product',{
		url:'/product',
		templateUrl: 'views/product.html',
		controller: 'productCtrl'
	})
	.state('service',{
		url: '/service',
		templateUrl: 'views/services.html',
		controller: 'servicesCtrl'
	})
	.state('about',{
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'aboutusCtrl'
	})
	.state('contact',{
		url: '/contact',
		templateUrl: 'views/contact.html',
		controller: 'contactusCtrl'
	})
})