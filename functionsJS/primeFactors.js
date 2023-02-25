function primeFactors(num) {
    const factors = [];
    let divisor = 2;

    while (num > 2) {
        if (num % divisor == 0) {
            factors.push(divisor);
            num /= divisor;
        } else {
            divisor++;
        }
    }

    const primeFactors = [];
    factors.forEach((factor) => {
        if (isPrime(factor) && !primeFactors.includes(factor)) {
            primeFactors.push(factor);
        }
    });

    return primeFactors;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}
