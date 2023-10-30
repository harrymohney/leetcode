var filter = function(arr, fn) {
  // Initialize an empty array called filteredArr.
  const filteredArr = []
  // For each index i from 0 to the length of arr - 1:
  for(let i = 0; i <= arr.length - 1; i ++) {
  //     If fn(arr[i], i) is truthy (evaluates to true):
      if (fn(arr[i], i)){
  //         Append arr[i] to filteredArr.
          filteredArr.push(arr[i])
      }

  }
  return filteredArr

  // Return filteredArr
};