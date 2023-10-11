var twoSum = function(nums, target) {
  // Create an empty dictionary to store the indices of seen numbers
  var indexMap = {};

  // Iterate through the array
  for (var i = 0; i < nums.length; i++) {
      // Calculate the complement, i.e., the number needed to reach the target
      var complement = target - nums[i];

      // Check if the complement is in the dictionary
      if (complement in indexMap) {
          // Return the indices of the two numbers
          return [indexMap[complement], i];
      }

      // If complement is not found, store the current number and its index in the dictionary
      indexMap[nums[i]] = i;
  }

  // If no solution is found, return an empty array
  return [];
};