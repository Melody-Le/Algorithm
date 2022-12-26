// TODO: Write a funciton call same, which accepts 2 arrays.
// Return true if every value in array has it's corresponding value squared in the second array.
/// The freequency of values must be the same ( no need to have same order, but "all elm " need to be same in squared of the remaining arr)

function same(arr1, arr2) {
  const length1 = arr1.length;
  const length2 = arr2.length;
  if (length1 !== length2) {
    return false;
  }
  for (let i = 0; i < length1; i++) {
    // find the Index of item in arr2 that same with arr1[i]**2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    } else {
      arr2.slice(arr1[i], 1);
    }
  }
  return true;
}

// Refactor:
function sameRefactor(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freequencyCounter1 = {};
  let freequencyCounter2 = {};
  for (let val of arr1) {
    freequencyCounter1[val] = (freequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freequencyCounter2[val] = (freequencyCounter2[val] || 0) + 1;
  }
  for (let key in freequencyCounter1) {
    if (!(key ** 2 in freequencyCounter2)) {
      return false;
    }
    if (freequencyCounter2[key ** 2] !== freequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
