/* SLIDING WINDOW
This pattern involes creating a window which can either be an array 
or number from one position to another.
Depending on a certain condition, the window either increases 
or closes ( and a new window is created)
Very useful for keeping track of a subset of data in an array/string ...
EXAMPLE: find the longest unique character in string: 
"hellothere" // lother
*/
// Task:
/*
write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive element in the array.
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([],2) // null
*/
// Naive Solution:
function maxSubarraySumNaive(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity; // because maybe arr is all negative case, so should like this
  for (let i = 0, l = arr.length; i < l - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    // console.log(temp, max);
  }
  return max;
}
const testNaive = maxSubarraySumNaive([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log("testNaive :", testNaive);

// Refactor:
function maxSubarraySumRefactor(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if ((arr.length = 0)) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
const testRefactor = maxSubarraySumRefactor([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
// max = 17;
// i = 3; tempSum = 17 - arr[0] + arr[3] = 17 - 2 + 2 = 17;
// i = 4; tempSum = 17 - arr[4-3] + arr[4] = 17 - arr[1] + arr[4] = 17 - 6 + 1 = 12; => maxSum still =17;
// i = 5; tempSum = 12 - arr[5-3] + arr[5] = 12 - 9 + 8 = 11 => maxSum still 17;
// i = 6; tempSum = 11 - arr[6-3] + arr[6] = 11 - 2 + 6 = 15 => maxSum still 17;
// i = 7; tempSum = 15 - arr[7-3] + arr[7] = 15 - 1 + 6 = 20 => maxSum = 20;
// ....
console.log("testRefactor :", testRefactor);
