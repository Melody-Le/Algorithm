function sameFrequency(n1, n2) {
  const arr1 = n1.toString().split("").map(Number);
  const arr2 = n2.toString().split("").map(Number);
  if (arr1.length !== arr2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
const res = sameFrequency(123123, 231231);
console.log(res);
