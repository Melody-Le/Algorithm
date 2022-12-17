// NOTE: write a function which takes in a string and return counts of each character in the string
/* Strategy: 
1. Understand problem
2. Explore Concrete Examples
2.1. Start with simple Examples
    charCount("aaaa"); // {a:4}
    charCount("hello"); // {h:1,e:1,l:2,o:1}
2.2. Progress to More Comples Examples
2.3. Explore Examples with Empty Inputs ( edge case)
    charCount("") /// retun null, or undefined or error?
3. Break it down:
    Explicity write outt the steps you need to take
4. Solve / Simplify: Solve the problem. If you can't => solve a simpler problem
  Ignore the part that give you dificult part of problem
5. Lookback and refactor

*/

function charCount(str) {
  // create an object that will be return
  const result = {};
  // loop over string, for each character
  for (let i = 0, l = str.length; i < l; i++) {
    const char = str[i].toLowerCase();
    // if the char is a number/letter AND  a key in object, add 1 to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      // if the char is  a number/letter AND  not in object, add it and set value to 1
      result[char] = 1;
    }
    // if character is something else (space,period ,... ) dont do anything
    // return object at end
  }
  console.log(result);
  return result;
}
charCount("heLlo");

//TODO: refactor:
function charCountRefactor1(str) {
  const result = {};
  for (let i = 0, l = str.length; i < l; i++) {
    const char = str[i].toLowerCase();
    // using regex
    if (/[a-z0-9]/.test(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  console.log(result);
  return result;
}
charCountRefactor1("TOday is a holiday!");

//TODO: refactor2 - BEST WAY:
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0); // default of char.charCodeAt() is at index 0
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
function charCountRefactor2(str) {
  const result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  console.log(result);
  return result;
}

charCountRefactor2("TOday is a holiday!");
