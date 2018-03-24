(function () {
  'use strict'
  angular.module("LunchCheck",[])
  .controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.list="";
  $scope.message="";
  $scope.msgColor="";
  $scope.CheckList = function (list) {
    var spaceComma = /\s*,\s*/; // to seperate comma along with immediate before and after optional spaces
    var listArray = list.split(spaceComma);
    listArray = listArray.filter(Boolean); // to remove empty string
    var count = listArray.length;
    if(count==0)
    {
      $scope.message="Please enter data first";
      $scope.msgColor="red";
    }
    else if(count<=3) {
      $scope.message="Enjoy!";
      $scope.msgColor="green";
    }
    else{
      $scope.message="Too much!";
      $scope.msgColor="green";
    }
  }

}

})();
