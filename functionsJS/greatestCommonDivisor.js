// short form of finding the greatest common divisor using Euclid's algorithm
// let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// long form of finding the greatest common divisor using Euclid's algorithm

function greatestCommonDivisor(a, b) {
    if(b === 0)
        return a
    else
        return greatestCommonDivisor(b, a % b)
}
