// Write a function leastCommonMultiple(num1, num2) that accepts two
// numbers as arguments.The functions should return the smallest number
// that is divisible by both num1 and num2.


function leastCommonMultiple(num1, num2) {
  // Find the greatest common divisor using Euclid's algorithm
  let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Calculate the least common multiple using the formula: lcm(a, b) = |a*b| / gcd(a, b)
  return Math.abs(num1 * num2) / gcd(num1, num2);
}




// console.log(leastCommonMultiple(4, 6)); // 12
// console.log(leastCommonMultiple(3, 5)); // 15
// console.log(leastCommonMultiple(2, 10)); // 10
