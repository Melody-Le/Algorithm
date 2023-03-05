/* TRY AGAIN
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/
function reverse(str) {
  if (str.length === 0) {
    return "";
  }
  const lastChar = str.slice(-1);
  const remaining = str.slice(0, -1);
  return lastChar.concat(reverse(remaining));
}
const test = reverse("hi");
console.log(test);

// Teacher Solution:
function reverse2(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
