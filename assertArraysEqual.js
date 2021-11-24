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

assertArraysEqual();