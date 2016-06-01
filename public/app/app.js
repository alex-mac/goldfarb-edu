var MyApp = angular.module('GoldfarbApp', ['ngRoute', 'GoldfarbCtrls']);

MyApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	console.log('App Running')
	$routeProvider
	.when('/', {
		templateUrl: 'app/views/home.html'
	})
	.when('/services', {
		templateUrl: 'app/views/services.html'
	})
	.when('/contactus',{
		templateUrl: 'app/views/contactus.html'
	})
	.when('/about',{
		templateUrl: 'app/views/about.html'
	})
	.when('/infobank', {
		templateUrl: 'app/views/infobank.ejs',
		controller: 'DataCtrl',
		resolve: {
			poneys: function() {
        db.topic.findAll({
			    include: [db.subtopic]
			  }).then(function(data){
			    // $scope.data = data;
			  	return data;
			  });
    	}
			
		}
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