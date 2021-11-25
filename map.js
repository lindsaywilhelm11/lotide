const words = ["ground", "control", "to", "major", "tom"];

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

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
  }

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])

const results2 = map(words, word => word[2]);
console.log(results2);
assertArraysEqual(results2, [ 'o', 'n', , 'j', 'm' ])

const results3 = map(words.reverse(), word => word);
console.log(results3);
assertArraysEqual(results3, ['tom','major','to','control','ground'])