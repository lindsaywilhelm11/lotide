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

const without = function(source, itemsToRemove) {
  const newSourceArray = [];
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      newSourceArray.push(item);
    }
  }
  return newSourceArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]));// => ["1", "2"]
console.log(without(["dog", "cat", "ferret"], ["cat"]));
console.log(without([11, "blue", true, "blue"], ["blue"]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
const numbers = [1, 4, 7, 11];
console.log(without(numbers, [1])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(numbers, [1, 4, 7, 11]);