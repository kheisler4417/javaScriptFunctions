function isPrime(num) {
    if (num <= 1)
        return false
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

function nextPrime(num) {
    for (let i = 1; i < num; i++) {
        const element = num + i;
        if (isPrime(element)) {
            return element;
        }
    }
}



// console.log(nextPrime(2)); // 3
// console.log(nextPrime(3)); // 5
// console.log(nextPrime(7)); // 11
// console.log(nextPrime(8)); // 11
// console.log(nextPrime(20)); // 23
// console.log(nextPrime(97)); // 101
