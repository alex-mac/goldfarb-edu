var app = angular.module('GoldfarbApp', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'start.html',
  });
}]);