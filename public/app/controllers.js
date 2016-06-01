console.log('controllers are a go');

angular.module('GoldfarbCtrls', [])
.controller('DataCtrl', ['$scope', function ($scope) {
  $scope.data = poneys;
  
}]);