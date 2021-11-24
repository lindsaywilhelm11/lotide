const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Passed:  ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Code
assertEqual(1, 1);
assertEqual(2, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hi", "Hi");