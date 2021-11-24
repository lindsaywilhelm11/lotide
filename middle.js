const eqArrays = function(firstArray, secondArray) {
    // Compare lengths of both arrays
    if (firstArray.length !== secondArray.length) return false;
    // If they are the same length, loop through them and see if each of their indexes match up as well.
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
      //If they don't match, return false
        return false;
      }
    }
    return true;
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`Passed: ${actual} === ${expected}`);
      return true;
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
      return false;
    }
  };

const middle = function(mainArray) {
    let middleArray = [];
    if (mainArray.length <= 2) {
        return [];
    } else if (mainArray.length % 2 !== 0) {
      return middleArray = [mainArray[(mainArray.length - 1) / 2]]
        } else {
            return middleArray = [mainArray[(mainArray.length / 2) - 1], mainArray[mainArray.length / 2]];
        }
    }

//Test Code
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]