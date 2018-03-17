(function () {
  'use strict'
  angular.module("LunchCheck",[])
  .controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.list="";
  $scope.message="";
  $scope.CheckList = function (list) {
    var spaceComma = /\s*,\s*/; // to seperate comma along with immediate before and after optional spaces
    var listArray = list.split(spaceComma);
    listArray = listArray.filter(Boolean); // to remove empty string
    var count = listArray.length;
    $scope.test = listArray;
    if(count>3)
    {
      $scope.message="Too much!";
    }
    else {
      $scope.message="Enjoy!";
    }
  }

}

})();
