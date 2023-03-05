/* TRY AGAIN, DEEP COPPY OBJECT
stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds all 
of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!
*/
function stringifyNumbers(obj) {
  // const deepCopyObj = JSON.parse(JSON.stringify(obj));
  const newObj = {};
  for (let key in obj) {
    // console.log(typeof deepCopyObj[key], "value is: ", deepCopyObj[key]);
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
const test = stringifyNumbers(obj);
console.log(test);
