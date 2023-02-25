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
    return arr;
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
