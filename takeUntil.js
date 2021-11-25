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

const takeUntil = function(array, callback) {
    const slicedArray = []
    for (let item of array) {
        if (callback(item) !== true) {
            slicedArray.push(item)
        } else {
            break;
        }
    } return slicedArray;
  }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual((results1), [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);