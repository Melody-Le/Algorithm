/* 
capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/
function capitalizeWords(arr) {
  const newArr = [];
  const capitalText = arr[0].toUpperCase();
  newArr.push(capitalText);
  if (arr.length === 1) {
    return newArr;
  } else {
    return newArr.concat(capitalizeWords(arr.slice(1)));
  }
}

let words = ["i", "am", "learning", "recursion"];
const test = capitalizeWords(words);
console.log(test);
