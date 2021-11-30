const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(mainArray) {
  let middleArray = [];
  if (mainArray.length <= 2) {
    return [];
  } else if (mainArray.length % 2 !== 0) {
    return middleArray = [mainArray[(mainArray.length - 1) / 2]];
  } else {
    return middleArray = [mainArray[(mainArray.length / 2) - 1], mainArray[mainArray.length / 2]];
  }
};

module.exports = middle;
