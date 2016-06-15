console.log('controllers are a go');

angular.module('GoldfarbCtrls', [])
.controller('DataCtrl', ['$scope', 'DataFactory', 'SubtopicsFactory', '$filter', '$sce', function ($scope, DataFactory,  SubtopicsFactory, $filter, $sce) {

  $scope.data;
  $scope.subtopicData;
  $scope.finalData = [];
  $scope.subTopicsCount;

  DataFactory.query(function success(data) {
    $scope.data = data;

  }, function error(err) {
    console.log(err)
  });

  $scope.selectAllTopics = function() {
    if ($(".selected").length !== $scope.data.length) {
      for (var i = 0; i < $scope.data.length; i++) {
        $scope.data[i].selected = true;
      }
    } else {
      for (var i = 0; i < $scope.data.length; i++) {
        $scope.data[i].selected = false;
      }
    }
  }


  $scope.showTopics = function() {
    $scope.topics= !$scope.topics;
    $scope.subtopics = false;
    $scope.details= false;

    for (var i = 0; i < $scope.data.length; i++) {
      for (var j = 0; j < $scope.subtopicData[i].subtopics.length; j++) {
       $scope.subtopicData[i].subtopics[j].selected = false;
      }
      $scope.data[i].selected = false;
    }
  }
  $scope.selectAllSubTopics = function() {
    for (var i = 0; i < $scope.data.length; i++) {
      for (var j = 0; j < $scope.subtopicData[i].subtopics.length; j++) {
       $scope.subtopicData[i].subtopics[j].selected = true;
      }
      $scope.data[i].selected = true;
    }
  }

  $scope.activate = function(item) {
    item.selected ? item.selected = false : item.selected = true;
  } 

  $scope.getAllSelectedRows = function() {
     var x = $filter("filter")($scope.data, {
       selected: true
     }, true);

    $scope.subtopicData = x;
     $scope.topics = false;
     $scope.subtopics = true;
   }

   $scope.getFinal = function() {
     for (var i = 0; i < $scope.subtopicData.length; i++) {
      for (var j = $scope.subtopicData[i].subtopics.length - 1; j >= 0; j--) {
        if ($scope.subtopicData[i].subtopics[j].selected !== true) {
          $scope.subtopicData[i].subtopics.splice(j, 1);

        } 
  
     }
   
     $scope.subtopics = false;
     $scope.details = true;
   }
  
}]);