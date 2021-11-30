const words = ["ground", "control", "to", "major", "tom"];
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word[2]);
console.log(results2);
assertArraysEqual(results2, [ 'o', 'n', , 'j', 'm' ]);

const results3 = map(words.reverse(), word => word);
console.log(results3);
assertArraysEqual(results3, ['tom','major','to','control','ground']);