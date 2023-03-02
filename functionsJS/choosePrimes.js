// Write a function choosePrimes(nums) that takes in an array of numbers
// as args.The function should return a new array containing the primes
// from the original array.A prime number is a number that is only divisible
// by 1 and itself.Hint: consider creating a helper function to check if a
// number is prime!



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

function choosePrimes(arr) {
    let primeArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (isPrime(element)) {
            primeArr.push(element)
        }
    }
    return primeArr;
}


// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
