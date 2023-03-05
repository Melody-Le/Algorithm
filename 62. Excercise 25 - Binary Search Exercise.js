/*
Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value 
and returns the index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here -
 https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
 and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/
function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === value) return middle;
    if (arr[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}
const test = binarySearch([2, 3, 6, 9, 13, 15, 18], 200);
console.log(test);
