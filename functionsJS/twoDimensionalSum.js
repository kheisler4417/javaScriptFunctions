function twoDimensionalSum(arr) {
    let sum = 0;
    for (let row of arr) {
        for (let num of row) {
            sum += num;
        }
    }
    return sum;
}



// let arr1 = [
//     [1, 3],
//     [-4, 7, 10],
//     [2]
// ];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [
//     [],
//     [3, 1, 2],
// ];
// console.log(twoDimensionalSum(arr2)); // 6
