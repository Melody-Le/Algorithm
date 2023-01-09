/*
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/
function areThereDuplicatesFrequencyCounter() {
  const argArr = Object.values(arguments);
  const argFrequency = {};
  for (let val of argArr) {
    argFrequency[val] = (argFrequency[val] || 0) + 1;
  }
  for (let key in argFrequency) {
    if (argFrequency[key] > 1) {
      return true;
    }
  }
}
const result1 = areThereDuplicatesFrequencyCounter(1, 2, 3, 2);
console.log("result1:", result1);
function areThereDuplicatesMultiPointer() {
  const argArr = Object.values(arguments);
  if (argArr.length === 0) return false;
  const argSorted = [...argArr].sort((a, b) => a - b);
  let check = 0;
  for (let move = 1; move < argSorted.length; move++) {
    if (argSorted[move] === argSorted[check]) return true;
    check++;
  }
  return false;
}
const result2 = areThereDuplicatesMultiPointer(1, 3, 2, 2);
console.log("result2:", result2);

function areThereDuplicatesOneLine() {
  return new Set(arguments).size !== arguments.length;
}
const result3 = areThereDuplicatesOneLine(1, 3, 2, 2);
console.log("result3:", result3);
