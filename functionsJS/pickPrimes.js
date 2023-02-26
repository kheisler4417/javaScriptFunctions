function pickPrimes(numbers) {
    // Define a helper function to check if a number is prime
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Filter the input array to only include prime numbers
    const primes = numbers.filter((num) => isPrime(num));

    return primes;
}



// console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
// console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
