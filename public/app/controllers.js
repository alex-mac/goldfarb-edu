console.log('controllers are a go');

angular.module('GoldfarbCtrls', [])
.controller('DataCtrl', ['$scope', 'DataFactory', 'SubtopicsFactory', '$filter', function ($scope, DataFactory,  SubtopicsFactory, $filter) {

  $scope.data;
  $scope.subtopicData;
  $scope.finalData = [];

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

    $scope.subtopicData = x;
      // .subtopics[0].subtopic);
     $scope.topics = false;
     $scope.subtopics = true;
   }

   $scope.getFinal = function() {
     console.log($scope.subtopicData);
     console.log($scope.subtopicData.length);
     for (var i = 0; i < $scope.subtopicData.length; i++) {
      for (var j = $scope.subtopicData[i].subtopics.length - 1; j >= 0; j--) {
        if ($scope.subtopicData[i].subtopics[j].selected !== true) {
          $scope.subtopicData[i].subtopics.splice(j, 1);
        }
      } 
     }

    // console.log($scope.subtopicData);
   
     $scope.subtopics = false;
     $scope.details = true;
   }
  
}]);