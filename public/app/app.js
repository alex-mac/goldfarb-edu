var MyApp = angular.module('GoldfarbApp', ['ngRoute']);

MyApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	console.log('App Running')
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/home.html'
	})
	.when('/services', {
		templateUrl: 'app/views/services.html',
	})
	.when('/contactus',{
		templateUrl: 'app/views/contactus.html',
	})
	.when('/about',{
		templateUrl: 'app/views/about.html',
	})
	.when('/infobank', {
		templateUrl: 'app/views/infobank.html',
	});
	$locationProvider.html5Mode(true);
}])
// .config(['$httpProvider', function($httpProvider) {
//   $httpProvider.interceptors.push('AuthInterceptor');
// }]).run(["$rootScope", "Auth", function($rootScope, Auth) {
//   $rootScope.isLoggedIn = function() {
//     return Auth.isLoggedIn.apply(Auth);
//   };
// }]);