/*
TODO: function take in a string and return count of each character in the string
*/

// function counChar(str) {
//   const strArr = str.split("");
//   console.log(strArr);
//   const strObj = {};
//   for (element of strArr) {
//     strObj[element] > 0 ? ++strObj[element] : (strObj[element] = 1);
//   }
//   return Object.keys(strObj).length;
// }
// const test1 = counChar("teddy");
// console.log(test1);

/*
TODO: Write a funciton call same, which accepts 2 arrays.
// Return true if every value in array has it's corresponding value squared in the second array.
/// The freequency of values must be the same ( no need to have same order, but "all elm " need to be same in squared of the remaining arr)
*/

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   const arrObj1 = {};
//   const arrObj2 = {};
//   for (let elm of arr1) {
//     arrObj1[elm] > 0 ? arrObj1[elm]++ : (arrObj1[elm] = 1);
//   }
//   for (let elm of arr2) {
//     arrObj2[elm] > 0 ? arrObj2[elm]++ : (arrObj2[elm] = 1);
//   }
//   console.log("arrObj1", arrObj1);
//   console.log("arrObj2", arrObj2);
//   console.log([1, 2, 3].includes(Math.sqrt(arr2[0])));
//   for (let key in arrObj1) {
//     if (key ** 2 in arrObj2 && arrObj1[key] === arrObj2[key ** 2]) {
//       return true;
//     } else return false;
//   }
// }
// const test = same([1, 2, 3], [1, 4, 9]);
// console.log(test);

//TODO: Anagrams:
// Given two String, write a function to determine if the second string is an anagram of the first.
// An anagam is a word, phrase, or name formed by rearranging the letters of anothers, such as cinema, formed from iceman.
// ;,gdevs cxaz''

// function anagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   const str1Arr = str1.split("");
//   const str2Arr = str2.split("");
//   const str1Obj = {};
//   const str2Obj = {};
//   for (let item of str1Arr) {
//     str1Obj[item] > 0 ? str1Obj[item]++ : (str1Obj[item] = 1);
//   }
//   for (let item of str2Arr) {
//     str2Obj[item] > 0 ? str2Obj[item]++ : (str2Obj[item] = 1);
//   }
//   for (let key in str1Obj) {
//     if (key in str2Obj && str1Obj[key] === str2Obj[key]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// const testAnagram = anagram("iceman", "cinema");
// console.log(testAnagram);

// function anagram2(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   const str1Arr = str1.split("");
//   const str2Arr = str2.split("");
//   const str1Obj = {};
//   for (let item of str1Arr) {
//     str1Obj[item] > 0 ? str1Obj[item]++ : (str1Obj[item] = 1);
//   }
//   for (let item of str2Arr) {
//     if (!str1Obj[item]) {
//       return false;
//     } else str1Obj[item]--;
//   }
//   return true;
// }
// const testAnagram2 = anagram2("iceman", "cinema");
// console.log(testAnagram2);

/*
TODO: SumZero:
Write a function called sumZero, which accepts a sorted array of integers.
the Funtion should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined
if a pair does not exist
*/
// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return undefined;
// }
// const tetSumZero = sumZero([-3, 2, 3]);
// console.log(tetSumZero);

/* TODO: countUniqueValues:
Implement a function called countUniqueValues, which accepts a sorted array,
and count the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
countUniqueValues([1,1,2,2]) // 2
countUniqueValues([1,2,3,4,7,7,7,7,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, 0, 1]) // 4
*/
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let counter = 1;
//   let i = 0;
//   let j = i + 1;
//   while (j < arr.length) {
//     if (arr[i] !== arr[j]) {
//       counter++;
//       i = j;
//       j++;
//     } else {
//       j++;
//     }
//   }
//   return counter;
// }
// const testCountUnique = countUniqueValues([1, 2, 3, 4, 7, 7, 7, 7, 12, 13]);
// console.log(testCountUnique);
// // Teacher:
// function countUniqueValues2(arr) {
//   if (arr.length === 0) return 0;
//   let counter = 0;
//   for (let move = 1; move < arr.length; move++) {
//     if (arr[counter] !== arr[move]) {
//       counter++;
//       arr[counter] = arr[move];
//     }
//   }
//   return counter + 1;
// }
// const testCountUnique2 = countUniqueValues2([1, 2, 3, 4, 7, 7, 7, 7, 12, 13]);
// console.log(testCountUnique2);

/* TODO: TRY AGAIN:SLIDING WINDOW
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

// function maxSubarraySum(arr, num) {
//   if (arr.length === 0) return null;
//   if (num === 1) return Math.max(...arr);
//   let sum = 0;
//   let temp = 0;
//   let max = -Infinity;
//   for (let i = 0; i < num; i++) {
//     temp += arr[i];
//     // temp = sum;
//   }
//   for (let i = 0; i + num < arr.length; i++) {
//     temp = temp - arr[i] + arr[num + i];
//     max = Math.max(temp, max);
//   }
//   return max;
// }

// const testMaxSubArrSum = maxSubarraySum([-1, -2, -3, -2, -1, -5, -6], 2);
// console.log("testMaxSubArrSum:", testMaxSubArrSum);

/* TODO:
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

// function search(arr, num) {
//   if (!arr.includes(num)) {
//     return -1;
//   }
//   let min = 0;
//   let max = arr.length - 1;
//   let mid = 0;
//   while (min <= max) {
//     console.log("-------------New Loop -------------");
//     mid = Math.floor((min + max) / 2);
//     console.log("min is:", min);
//     console.log("max is:", max);
//     console.log("mid id:", mid);
//     if (arr[mid] === num) return mid;
//     if (arr[mid] < num) {
//       min = mid + 1;
//     } else max = mid - 1;
//   }
//   return -1;
// }
// const testSearch = search([1, 2, 4, 6, 7, 8], 2);
// console.log(testSearch);

/*TODO: TRY AGAIN
 Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

// function sameFrequency(num1, num2) {
//   const num1Arr = num1.toString().split("").map(Number);
//   const num2Arr = num2.toString().split("").map(Number);
//   if (num1Arr.length !== num2Arr.length) {
//     return false;
//   }
//   const num1Obj = {};
//   const num2Obj = {};
//   for (let elm of num1Arr) {
//     num1Obj[elm] > 0 ? num1Obj[elm]++ : (num1Obj[elm] = 1);
//   }
//   for (let elm of num2Arr) {
//     num2Obj[elm] > 0 ? num2Obj[elm]++ : (num2Obj[elm] = 1);
//   }
//   for (let key in num1Obj) {
//     if (!key in num2Obj) {
//       return false;
//     }
//     if (num1Obj[key] !== num2Obj[key]) return false;
//   }
//   return true;
// }
// const testSameFreequency = sameFrequency(123, 231);
// console.log(testSameFreequency);

/* TODO: TRY AGAIN:
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
// function areThereDuplicates() {
//   const argArr = Object.values(arguments);
//   const setArgument = new Set(argArr);
//   console.log(setArgument.size);
// }
// const result3 = areThereDuplicates(1, 3, 2, 2);
// console.log("result3:", result3);

/* TODO: 
Multiple Pointers - averagePair
Write a function called averagePair. 
Given a sorted array of integers and a target average,
determine if there is a pair of values in the array 
where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

// function averagePair(arr, target) {
//   let min = 0;
//   let max = arr.length - 1;
//   let mid = 0;
//   while (min <= max) {
//     mid = Math.floor((min + max) / 2);
//     if (arr[mid] === target) return true;
//     if (arr[mid] < target) {
//       min = min + 1;
//     } else max = max - 1;
//   }
//   return false;
// }
// const testAveragePair = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 7);
// console.log(testAveragePair);

/*TODO: TRY AGAIN
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

// function isSubsequence(str1, str2) {
//   let move1 = 0;
//   let move2 = 0;
//   if (str1.length === 0) return true;
//   while (move2 <= str2.length) {
//     if (move1 === str1.length) return true;
//     if (str2[move2] === str1[move1]) {
//       move1++;
//     }
//     move2++;
//   }
//   return false;
// }
// const result1 = isSubsequence("hello", "ello world");
// console.log(result1);

// function isSubsequence2(str1, str2) {
//   if (str1.length === 0) return true;
//   if (str1[0] === str2[0]) {
//     return isSubsequence(str1.slice(1), str2.slice(1));
//   } else {
//     return isSubsequence(str1, str2.slice(1));
//   }
// }
// const result2 = isSubsequence2("hello", "hello world");
// console.log(result2);

/* TODO: 
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, 
which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
*/

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;
//   // let max = -Infinity;
//   let temp = 0;

//   for (let i = 0; i < num; i++) {
//     temp += arr[i];
//   }
//   let max = temp;
//   for (let i = num; i < arr.length; i++) {
//     temp = temp - arr[i - num] + arr[i];
//     max = Math.max(max, temp);
//   }
//   return max;
// }
// const result = maxSubarraySum([100, 200, 300, 400], 2);
// console.log(result);

/* TODO: TRY AGAIN: DIFFICULT
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than 
or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2     [1,2,3]
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/

// function minSubArrayLen(arr, num) {
//   let sum = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
//   while (start < arr.length) {
//     if (sum < num && end < arr.length) {
//       sum += arr[end];
//       end++;
//     } else if (sum >= num) {
//       minLen = Math.min(minLen, end - start);
//       sum -= arr[start];
//       start++;
//     } else break;
//     return minLen === Infinity ? Infinity : minLen;
//   }
// }

/* TODO: TRY AGAIN DONT UNDERTAND
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and 
returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/
// function findLongestSubstringTeacher(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

// const test = findLongestSubstringTeacher("rithmschool");
// console.log(test);

/*
TODO: RECURSIVE

*/
function factorialRecursive(num) {
  if (num === 1) {
    return 1;
  } else return num * factorialRecursive(num - 1);
}

const test = factorialRecursive(10);
console.log(test);

/*
TODO: PURE RECURSIVE: TRY AGAIN
Pure Recursion Tips:
- For Arrays, use methods like slice, the spread operator,
and concat that make copies of arrays so you do not mutate them
- Strings: are immuatable so you will need to use methods like 
slice, substr, or substring to copies of strings
- Objects: To make copies of objects, we use Object.assign, or spread operator
*/

function collectOddValues(arr) {
  const newArr = [];
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  return newArr.concat(collectOddValues(arr.slice(1)));
}

/* TODO: RECURSIVE TRY AGAIN
power:
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()  - 
do not worry about negative bases and exponents.
*/
function power(base, number) {
  if (number === 0) return 1;
  return base * power(base, number - 1);
}

/* TODO:
factorial
Write a function factorial which accepts a number and returns the factorial of that number. 
A factorial is the product of an integer and all the integers below it; 
e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24. 
 factorial zero (0!) is always 1.
*/

function factorial(n) {
  if ((n = 1)) {
    return 1;
  }
  return n * factorial(n - 1);
}

/* TODO:
productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
