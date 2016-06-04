console.log('controllers are a go');

angular.module('GoldfarbCtrls', [])
.controller('DataCtrl', ['$scope', 'DataFactory', 'SubtopicsFactory', '$filter', function ($scope, DataFactory,  SubtopicsFactory, $filter) {

  $scope.data;
  DataFactory.query(function success(data) {
    $scope.data = data;  console.log($scope.data);

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

    // for (var i = 0; i < x.length; i++) {
    //   x[i] = x[i].id
    // }

    $scope.subtopicData = x;
     console.log($scope.subtopicData[0]);
      // .subtopics[0].subtopic);
     $scope.topics = false;
     $scope.subtopics = true;

     
   }
  
}]);