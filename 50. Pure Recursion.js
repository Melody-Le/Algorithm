/*
Pure Recursion Tips:
- For Arrays, use methods like slice, the spread operator,
and concat that make copies of arrays so you do not mutate them
- Strings: are immuatable so you will need to use methods like 
slice, substr, or substring to copies of strings
- Objects: To make copies of objects, we use Object.assign, or spread operator
*/
function collecOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collecOddValues(arr.slice(1)));
  return newArr;
}
