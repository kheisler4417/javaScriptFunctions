function isAntiPrime(num) {
    let maxDivisors = 0;

    for (let i = 1; i < num; i++) {
        const divisors = getDivisors(i);

        if (divisors.length > maxDivisors) {
            maxDivisors = divisors.length;
        }
    }

    const numDivisors = getDivisors(num).length;

    return numDivisors > maxDivisors;
}

function getDivisors(num) {
    const divisors = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== num / i) {
                divisors.push(num / i);
            }
        }
    }

    return divisors;
}
