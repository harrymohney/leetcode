// Function romanToInt(s):
function romanToInt(s) {
  // Initialize a dictionary 'roman' to store the values of Roman numerals.
  let roman = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  // Initialize a variable 'result' to store the integer result, set it to 0.
  let result = 0
  // Initialize a variable 'prev' to store the value of the previous Roman numeral, set it to 0.
  let prev = 0
  // Reverse the input string 's' to process Roman numerals from right to left.
  const reversedS = s.split('').reverse().join('');
  // For each character 'c' in 's':
  for(const c of reversedS){
      const value = roman[c]
  //     If 'roman[c]' is less than 'prev':
  if(value < prev){
  //         Subtract 'roman[c]' from 'result'.
      result -= value;
  //     Else:
  //         Add 'roman[c]' to 'result'.
  } else {
      result += value
  }
  //     Update 'prev' with the value of 'roman[c]'.
  prev = value
  }
      

  return result

};