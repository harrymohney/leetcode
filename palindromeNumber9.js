var isPalindrome = function(x) {
  if(x < 0){
      return false;
  } 
//     Initialize a variable `original` to store the original value of x
  const original = x;

//     Initialize a variable `reversed` to 0
  let reversed = 0;
  while(x !== 0){
      const digit = x % 10
      reversed = reversed * 10 + digit
      x = Math.floor(x/10)
  }
  return original === reversed
};