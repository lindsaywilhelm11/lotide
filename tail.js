const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let newArr = arr.slice(1);
  return console.log(newArr);
};

module.exports = tail;

 