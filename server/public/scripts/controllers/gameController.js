colorBlocks.controller('GameController', ['$scope', 'DataFactory', function($scope, DataFactory) {

console.log('game controller running');
$scope.givenColors = DataFactory.colorsArray;
// $scope.multipeColors = DataFactory.multipeColorsArray;
$scope.chosenColors = DataFactory.chosenColorsArray;
// start game
init();

// resets game to the starting state
function init() {
  $scope.messageText = "";
  $scope.currentColor = $scope.givenColors[randomNumber(0, $scope.givenColors.length - 1)];
  $scope.colorPrompt = 'Can you find the ' + $scope.currentColor + ' block?'
}

// makes new name with users picked colors
$scope.usersPicksColors = function () {
  $scope.messageText = "";
  $scope.currentColor = $scope.chosenColors[randomNumber(0, $scope.chosenColors.length - 1)];
  $scope.colorPrompt = 'Can you find the ' + $scope.currentColor + ' block?'
}

// click handler for guessing colors
$scope.handleInput = function(clickedColor) {
  if(clickedColor === $scope.currentColor) {
    alert('You got it!\n\nNow try another!');
    init();
  } else {
    $scope.messageText = 'Oh no! You guessed wrong!';
  }
}

//UTILITY FUNCTIONS
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
}]);
