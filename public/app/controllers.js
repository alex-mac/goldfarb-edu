console.log('controllers are a go');

angular.module('GoldfarbCtrls', [])
.controller('DataCtrl', ['$scope', 'DataFactory', function ($scope, DataFactory) {
  $scope.mines;

  DataFactory.query(function success(data) {
    $scope.data = data;
  }, function error(err) {
    console.log(err)
  });

  var changeInfo = function(input) {
    console.log(input)
    $scope.mines = input;
  }
}]);