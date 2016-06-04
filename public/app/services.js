angular.module('DataServices', ['ngResource'])
.factory('DataFactory', ['$resource', function($resource) {
  return $resource('/api/infobank/topics');
}])
.factory('SubtopicsFactory', ['$resource', function($resource) {
  return $resource('/api/infobank/subtopics/:id');
}])
