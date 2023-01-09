/*
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form a
 subsequence of the characters in the second string. In other words, 
 the function should check whether the characters in the first string
  appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)


*/
function isSubsequence(str1, str2) {
  let move1 = 0;
  let move2 = 0;
  if (!str1) return true;
  while (move2 < str2.length) {
    if (move1 === str1.length) {
      return true;
    }
    if (str1[move1] === str2[move2]) {
      move1++;
    }
    move2++;
  }
  return false;
}
const result1 = isSubsequence("hello", "hello world");
console.log(result1);

// Recursion Solution:
function isSubsequenceRecursion(str1, str2) {
  // console.log("str1 is:", str1);
  // console.log("str2 is:", str2);
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) {
    return isSubsequenceRecursion(str1.slice(1), str2.slice(1));
  }
  return isSubsequenceRecursion(str1, str2.slice(1));
}
const result2 = isSubsequenceRecursion("hello", "hello world");
console.log(result2);
