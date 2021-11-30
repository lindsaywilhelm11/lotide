const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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