angular.module('appRoutes', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/views/pages/home.html'
			})
			.when('/login', {
				templateUrl: 'app/views/pages/login.html'
			})
			.when('/sign-up', {
				templateUrl: 'app/views/pages/sign-up.html'
			})
			
		$locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
	});