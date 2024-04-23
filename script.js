function secondHighest(arr) {
  // Check if the array is empty or has only one element
  if (arr.length < 2) {
    return -Infinity;
  }

  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Filter out the maximum element from the array
  let filteredArr = arr.filter(num => num !== max);

  // If the filtered array is empty (all elements were the same), return -Infinity
  if (filteredArr.length === 0) {
    return -Infinity;
  }

  // Find the maximum element in the filtered array (second-highest)
  let secondMax = Math.max(...filteredArr);
 
  return secondMax;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', input => {
  const arr = JSON.parse(input); // Parse the input as JSON to get an array directly
  const result = secondHighest(arr);
  console.log(result);

  readline.close();
}); 
