function strangeSums(arr) {
    const seen = new Set();
    let count = 0;
    for (let num of arr) {
        const complement = -num;
        if (seen.has(complement)) {
            count++;
        }
        seen.add(num);
    }
    return count;
}


// console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
// console.log(strangeSums([42, 3, -1, -42]));      // 1
// console.log(strangeSums([-5, 5]));               // 1
// console.log(strangeSums([19, 6, -3, -20]));      // 0
// console.log(strangeSums([9]));                   // 0
