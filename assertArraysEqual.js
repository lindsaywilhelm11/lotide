const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

module.exports = assertArraysEqual;