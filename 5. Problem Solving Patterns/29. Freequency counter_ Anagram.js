//Anagrams:
// Given two String, write a function to determine if the second string is an anagram of the first.
// An anagam is a word, phrase, or name formed by rearranging the letters of anothers, such as cinema, formed from iceman.
function anagrams(str1, str2) {
  const length1 = str1.length;
  const length2 = str2.length;
  if (length1 !== length2) {
    return false;
  }
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  const str1Obj = {};
  const str2Obj = {};
  for (let val of str1Arr) {
    str1Obj[val] = (str1Obj[val] || 0) + 1;
  }
  for (let val of str2Arr) {
    str2Obj[val] = (str2Obj[val] || 0) + 1;
  }

  for (let key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
    if (!(key in str2Obj)) {
      return false;
    }
  }
  return true;
}
console.log(anagrams("aaz", "zaa"));

//SOLUTION of teacher:
function validAnagramTeacher(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letters = first[i];
    lookup[letters] ? (lookup[letters] += 1) : (lookup[letters] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letters = second[i];
    if (!lookup[letters]) {
      return false;
    } else {
      lookup[letters] -= 1;
    }
  }
  return true;
}
