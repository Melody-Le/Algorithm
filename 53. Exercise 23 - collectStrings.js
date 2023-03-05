/* TRY AGAIN
collectStrings
Write a function called collectStrings which accepts an object 
and returns an array of all the values in the object that have a typeof string
*/
function collectStrings(obj) {
  const arrOfString = [];
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      return arrOfString.concat(collectStrings(obj[key]));
    } else if (typeof obj[key] === "string") {
      arrOfString.push(obj[key]);
    } else {
      continue;
    }
  }
  return arrOfString;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
const test = collectStrings(obj);
console.log(test);
