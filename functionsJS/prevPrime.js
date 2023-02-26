function prevPrime(num) {
    if (num < 3) {
        return null;
    }

    let candidate = num - 1;

    while (candidate >= 2) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(candidate); i++) {
            if (candidate % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            return candidate;
        }

        candidate--;
    }

    return null;
}



// console.log(prevPrime(32)); // 31
// console.log(prevPrime(33)); // 31
// console.log(prevPrime(14)); // 13
// console.log(prevPrime(7));  // 5
// console.log(prevPrime(4));  // 3
// console.log(prevPrime(2));  // null
// console.log(prevPrime(1));  // null
