const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Passed:  ${actual}   ===  ${expected}`);
    } else if (actual !== expected) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const head = function(arr) {
      return arr[0]
  }
  
  // Test Code
//   assertEqual(1, 1);
//   assertEqual(2, 1);
//   assertEqual("Lighthouse Labs", "Bootcamp");
//   assertEqual("Hi", "Hi");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([7]), 7);
assertEqual(head([]));