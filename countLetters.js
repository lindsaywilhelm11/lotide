const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const results = {};
  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

countLetters('LHL');
countLetters('Hi my name is Lindsay');