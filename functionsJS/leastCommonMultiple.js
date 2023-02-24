function leastCommonMultiple(num1, num2) {
  // Find the greatest common divisor using Euclid's algorithm
  let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Calculate the least common multiple using the formula: lcm(a, b) = |a*b| / gcd(a, b)
  return Math.abs(num1 * num2) / gcd(num1, num2);
}
