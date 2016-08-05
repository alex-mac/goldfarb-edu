angular.module('GoldfarbCtrls', [])
.controller('DataCtrl', ['$scope', 'DataFactory', 'SubtopicsFactory', '$filter', '$sce', function ($scope, DataFactory,  SubtopicsFactory, $filter, $sce) {

  $scope.topicsData;
  $scope.subtopicData;
  $scope.finalData = [];
  $scope.subTopicsCount;

  // uses DataFactory object to get all the topics from the database
  DataFactory.query(function success(data) {
    $scope.topicsData = data;
  }, function error(err) {
    console.log(err)
  });

  // when a user clicks on an item (topic or sub-topic), this function highlights or unhighlights the item.
  $scope.highlight = function(item) {
    item.selected ? item.selected = false : item.selected = true;
  } 

  // if no topics are selected or if topics are partially selected, highlight all topics
  // if all topics are highlighted, unhighlight all topics
  $scope.selectAllTopics = function() {
    if ($(".selected").length !== $scope.topicsData.length) {
      for (var i = 0; i < $scope.topicsData.length; i++) {
        $scope.topicsData[i].selected = true;
      }
    } else {
      for (var i = 0; i < $scope.topicsData.length; i++) {
        $scope.topicsData[i].selected = false;
      }
    }
  }

  // when user submits topics, show subtopics
  $scope.showTopics = function() {
    $scope.topics= !$scope.topics;
    $scope.subtopics = false;
    $scope.details= false;

    for (var i = 0; i < $scope.topicsData.length; i++) {
      for (var j = 0; j < $scope.topicsData[i].subtopics.length; j++) {
        $scope.topicsData[i].subtopics[j].selected = false;
      }
      $scope.topicsData[i].selected = false;
    }
  }

  $scope.selectAllSubTopics = function() {
    for (var i = 0; i < $scope.topicsData.length; i++) {
      for (var j = 0; j < $scope.topicsData[i].subtopics.length; j++) {
       $scope.topicsData[i].subtopics[j].selected = true;
      }
      $scope.topicsData[i].selected = true;
    }
  }

  $scope.getAllSelectedRows = function() {
     var x = $filter("filter")($scope.topicsData, {
       selected: true
     }, true);

    $scope.subtopicData = x;
     $scope.topics = false;
     $scope.subtopics = true;
   }

   $scope.getFinal = function() {
     for (var i = 0; i < $scope.topicsData.length; i++) {
      for (var j = $scope.topicsData[i].subtopics.length - 1; j >= 0; j--) {
        if ($scope.topicsData[i].subtopics[j].selected !== true) {
          $scope.topicsData[i].subtopics.splice(j, 1);

        } 
        
      } 
     }

     $scope.subtopics = false;
     $scope.details = true;
   }
}]);