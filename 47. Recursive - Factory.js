function factorialRecursive(num) {
  let factorial = 1;
  if (num === 1) {
    return factorial;
  }
  return num * factorialRecursive(num - 1);
}
const result = factorialRecursive(4);
console.log(result);
