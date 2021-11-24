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

const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            if (results[sentence[i]]) {
                results[sentence[i]].push(i);
              }  else {
                results[sentence[i]] = [i];
              }
            }
          }
          return results;
        };

  assertArraysEqual(letterPositions("hello").e, [1]);
  assertArraysEqual(letterPositions("hi").h, [0]);
  assertArraysEqual(letterPositions("my name is").m, [0, 5]);
  assertArraysEqual(letterPositions("Lindsay").y, [6]);
  assertArraysEqual(letterPositions("My dog's name is Jedi").J, [17]);