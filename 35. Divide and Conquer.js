/*
DIVIDE & CONQUER:
deviding a data set into smaller chunks and then repeating a process 
with a subset of data
=> can decrease time compleixty alot.
EXAMPLE:
Given a SORTED array of integers, writie a function that accept a value 
and returns the index where the value passed to the function is located. 
If values is not found, return -1.
search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 6
search([1,2,3,4,5,6],11) // -1

*/
// Naive Solution: O(N)
function searchNaive(arr, val) {
  for (let i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
//refacter: Binary Search - Log(N)
function searchRefactor(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] < val) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
}
const result = searchRefactor([1, 2, 3, 4, 5, 6], 4);
console.log(result);
