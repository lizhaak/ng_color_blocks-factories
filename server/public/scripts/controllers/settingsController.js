colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");

  $scope.message = 'Choose the colors for the Color Picker Game:';

  $scope.multipleColors = DataFactory.multipleColorsArray;
  $scope.chosenColors = DataFactory.chosenColorsArray;
  $scope.colorCount = DataFactory.count();

  $scope.selectAction = function() {
    console.log('selected Color: ', $scope.selectedColor);
    // $scope.chosenColors = [];
    $scope.chosenColors.push($scope.selectedColor);
    console.log('chosen colors array: ', $scope.chosenColors);
  }
}]);
