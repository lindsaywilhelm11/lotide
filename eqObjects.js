const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Passed:  ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.values(object2).length) {
        return false
    }

    for (let key in object1) {
      if(Array.isArray(object1[key])){
        if(!(eqArrays(object1[key], object2[key]))){
          return false
        } 
      } else if(object1[key] !== object2[key]) {
          return false
        }
    }
    return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false