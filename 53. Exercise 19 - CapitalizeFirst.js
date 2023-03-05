/* TRY AGAIN VERY NICE
capitalizeFirst
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
*/
// function capitalizeFirst(arr) {
//   const newArr = [];
//   const str = arr[0];
//   const strCap = str[0].toUpperCase() + str.slice(1).toLowerCase();
//   newArr.push(strCap);
//   if (arr.length === 1) return newArr;
//   const remainingArgument = arr.slice(1);
//   return newArr.concat(capitalizeFirst(remainingArgument));
// }

function capitalizeFirst(arr) {
  const firstChar = arr[0][0].toUpperCase();
  const remainingChar = arr[0].slice(1).toLowerCase();
  const newArr = [];
  const newText = firstChar + remainingChar;
  const remainingItem = arr.slice(1);
  newArr.push(newText);
  if (arr.length === 1) return newArr;
  return newArr.concat(capitalizeFirst(remainingItem));
}
const test = capitalizeFirst(["hih", "teddy", "choco"]);
console.log(test);
