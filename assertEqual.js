const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("Assertion Failed: " + actual + " !== " + expected);
  }
};

// Test Code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Hey", "Hi");