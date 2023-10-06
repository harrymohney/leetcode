var createCounter = function(n) {
  let counter = n;
  return function() {
      let currentVal = counter;
      counter++;
      return currentVal;
  };
};

console.log(createCounter())