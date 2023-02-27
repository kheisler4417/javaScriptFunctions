function pairProduct(arr, product) {
    const seen = new Set();
    for (let num of arr) {
        if (product % num === 0 && seen.has(product / num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}



// console.log(pairProduct([4, 2, 5, 8], 16))    // true
// console.log(pairProduct([8, 1, 9, 3], 8))     // true
// console.log(pairProduct([3, 4], 12))          // true
// console.log(pairProduct([3, 4, 6, 2, 5], 12)) // true
// console.log(pairProduct([4, 2, 5, 7], 16))    // false
// console.log(pairProduct([8, 4, 9, 3], 8))     // false
// console.log(pairProduct([3], 12))             // false
