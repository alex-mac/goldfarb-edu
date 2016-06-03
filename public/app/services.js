angular.module('DataServices', ['ngResource'])
.factory('DataFactory', ['$resource', function($resource) {
  return $resource('/api/infobank');
}])