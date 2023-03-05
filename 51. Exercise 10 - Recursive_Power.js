/*
power:
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()  - 
do not worry about negative bases and exponents.
*/
function power(base, number) {
  if (number === 0) return 1;

  return base * power(base, number - 1);
}
const test = power(2, 4);
console.log(test);
