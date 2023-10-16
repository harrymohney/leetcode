var createCounter = function(init) {
  let current = init;

  let increment = () => {
      current += 1;
      return current;
  };

  let decrement = () => {
      current -= 1;
      return current;
  };

  let reset = () => {
      current = init;
      return current;
  };

  return {
      increment,
      decrement,
      reset
  };
};

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // should print 6
