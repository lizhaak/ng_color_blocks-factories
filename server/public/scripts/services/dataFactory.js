colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = ['blue', 'red', 'green', 'orange', 'papayawhip']
  var multipleColors = ['blue', 'red', 'green', 'orange', 'papayawhip', 'yellow', 'pink', 'purple', 'black'];
  var chosenColors = [];
  var recentColor = {};
  var count = 0;

  var addColor = function(color) {
    var newColor = {color: color};
    chosenColors.push(newColor);
    // make sure you use a property on this object!
    // otherwise the controller/view won't reflect the new value
    recentColor.color = newColor;
  }

  var increment = function() {
    count++;
    console.log("factory count: ", count);
    return count;
  }

  // public API for access to our private data
  return {
    colorsArray: colors,
    multipleColorsArray: multipleColors,
    chosenColorsArray: chosenColors,
    recentColor: recentColor,
    count: function() {
      return count;
    },
    addOne: function() {
      return increment();
    },
    addColor: function(color) {
      addColor(color);
    }
  };

}]);
