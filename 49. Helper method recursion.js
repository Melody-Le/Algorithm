function collectOddValues(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}
collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// HELOPER METHOD RECURSION:
function outer(input) {
  const outerScopedVariable = [];
  function helper(helperInput) {
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}
