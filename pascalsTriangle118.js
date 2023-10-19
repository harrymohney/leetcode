function generate(numRows) {
  // Return an empty array for numRows = 0.
  if(numRows === 0){
  return [];
  }
  
  // Initialize with the first row.
  const triangle = [[1]];
  for (let i=1; i < numRows; i++) {
      const prevRow = triangle[i-1]
      const newRow =[1]
  
  // The first element of each row is always 1.
  for (let j=1; j<i; j++){
  // Calculate the middle elements of the row by summing the two elements above.
      newRow.push(prevRow[j - 1] + prevRow[j])
  }
  newRow.push(1)// The last element of each row is always 1.
  triangle.push(newRow)
  }
  return triangle
  };
  
  const numRows = 5
  const result = generate(numRows)