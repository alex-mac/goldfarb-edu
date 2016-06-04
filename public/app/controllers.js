console.log('controllers are a go');

angular.module('GoldfarbCtrls', [])
.controller('DataCtrl', ['$scope', 'DataFactory', 'SubtopicsFactory', '$filter', function ($scope, DataFactory,  SubtopicsFactory, $filter) {

  DataFactory.query(function success(data) {
    $scope.data = data;
  }, function error(err) {
    console.log(err)
  });

  $scope.activate = function(item) {
    item.selected ? item.selected = false : item.selected = true;
  } 

  $scope.getAllSelectedRows = function() {
     var x = $filter("filter")($scope.data, {
       selected: true
     }, true);

    for (var i = 0; i < x.length; i++) {
      x[i] = x[i].id
    }
     // console.log(x[0].id);
     console.log(x)
     $scope.topics = false;
     $scope.subtopics = true;

     SubtopicsFactory.get({topicId: x}, function success(subTopicsData) {
      $scope.subbyData = subTopicsData;
     }, function error(err) {
      console.log(err)
     });
   }
  
}]);