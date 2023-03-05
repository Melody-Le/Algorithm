function naiveStringSearch(str, pattern) {
  if (str.length < pattern.length) return 0;
  let count = 0;
  for (let i = 0; i <= str.length - pattern.length; i++) {
    let newStr = "";
    for (let j = 0; j < pattern.length; j++) {
      if (str[i + j] === pattern[j]) {
        newStr += str[i + j];
      } else {
        break;
      }
    }
    if (newStr === pattern) {
      count++;
      console.log(newStr);
    }
  }
  return count;
}
const test = naiveStringSearch("helloteddyhahaotey", "ote");
console.log(test);
