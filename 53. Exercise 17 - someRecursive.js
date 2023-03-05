/* 
someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise it returns false.
*/
function someRecursive(arr, cbfn) {
  // const result = cbfn(arr[0]);

  if (arr.length === 1) return result;
  if (!result) return someRecursive(arr.slice(1), cbfn);
  return true;
}
const test = someRecursive([1, 2, 3]);
console.log(test);
