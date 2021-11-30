const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.values(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });
assertObjectsEqual({ a: 'dog', b: 2 }, { a: '1', b: 2 });
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 54 });