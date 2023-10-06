var expect = function(val) {
  var testObject = {
      value: val,
      toBe: function(expectedValue) {
          if (this.value === expectedValue) {
              return true;
          } else {
              throw new Error("Not Equal");
          }
      },
      notToBe: function(notExpectedValue) {
          if (this.value !== notExpectedValue) {
              return true;
          } else {
              throw new Error("Equal");
          }
      }
  };

  return testObject;
};

// Usage:
var test = expect(5); // Create a test object with an initial value of 5
console.log(test.toBe(5)); // Output: true (5 === 5)
console.log(test.notToBe(10)); // Output: true (5 !== 10)