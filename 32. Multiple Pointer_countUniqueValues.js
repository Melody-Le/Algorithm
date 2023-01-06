/* countUniqueValues:
Implement a function called countUniqueValues, which accepts a sorted array,
and count the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
countUniqueValues([1,1,2,2]) // 2
countUniqueValues([1,2,3,4,7,7,7,7,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, 0, 1]) // 4
*/

// My solution:
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let count = 1; // because If arr.length > 0 , so inside that array will always have at least 1 uniqueValue
  let current = 0;
  let next = current + 1;
  while (next < arr.length) {
    if (arr[current] !== arr[next]) {
      count++;
      current = next;
      next++;
    } else {
      next++;
    }
  }
  return count;
}
const test = countUniqueValues([-2, -1, 0, 1]);
console.log("test:", test);
// Solution of teacher:
function countUniqueValuesTeacher(arr) {
  let count = 0;
  if (arr.length === 0) return 0;
  for (let move = 1, l = arr.length; move < l; move++) {
    if (arr[count] !== arr[move]) {
      count++;
      arr[count] = arr[move];
    }
  }
  return count + 1;
}
const test2 = countUniqueValuesTeacher([-2, -1, 0, 1]);
console.log("test2 :", test2);
