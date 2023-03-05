// TRY AGAIN NICE, ESPECIALY OPTIMIZE SOLUTION

// NORMAL WAY
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    // go from big to small, then can use i for the loop of j
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP:
        // let temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        swap(arr, j, j + 1);
      }
    }
    console.log("ONE PASS");
  }
  return arr;
}
// const test = bubbleSort([29, 88, 37, -6, 8, -3]);
// console.log(test);
/* OPTIMIzE WAY : O of n
The solution above take time because incase the array almost already sorted, it still keep running the whole array => not affected.
so we can set the condition: if No swap => break
*/

function bubbleSortBetter(arr) {
  let noSwaps;
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    console.log("ONE PASS");
    if (noSwaps) {
      console.log("Done");
      break;
    }
  }
  return arr;
}
const test2 = bubbleSortBetter([-1, 2, -7, 5, 6, 7]);
console.log("SOLUTION2 IS:", test2);
