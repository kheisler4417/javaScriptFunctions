function twoDimensionalProduct(array) {
    let product = 1;
    for (let row of array) {
        for (let num of row) {
            product *= num;
        }
    }
    return product;
}



// let arr1 = [
//     [6, 4],
//     [5],
//     [3, 1]
// ];
// console.log(twoDimensionalProduct(arr1)); // 360

// let arr2 = [
//     [11, 4],
//     [2]
// ];
// console.log(twoDimensionalProduct(arr2)); // 88
