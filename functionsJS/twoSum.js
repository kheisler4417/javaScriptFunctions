function twoSum(arr, target) {
    const seen = new Set();
    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}






// console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
// console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
// console.log(twoSum([4, 6, 2, 3], 8)); // true
// console.log(twoSum([4, 6, 2, 3], 11)); // false
