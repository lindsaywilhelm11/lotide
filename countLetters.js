const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Passed:  ${actual} === ${expected}`);
    } else if (actual !== expected) {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };

  const countLetters = function(sentence) {
      const results = {};
        for (let letter of sentence) {
            if(letter !== " ") {
                if(results[letter]) {
                    results[letter] += 1
                } else {
                    results[letter] = 1
                }
            }
            
        }
        console.log(results)
      return results;
  }

 


countLetters('LHL')
  countLetters('Hi my name is Lindsay')