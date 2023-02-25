function productWithReduce(nums) {
    return nums.reduce((product, num) => product * num);
  }

//   The reduce method is called on the nums array, and takes a callback function as an argument. The callback function takes two arguments: an accumulator variable that starts at the first element of the array, and the current element being processed.

//   In this implementation, the accumulator is initialized to the first element of the array by default, and then multiplied by each subsequent element as the reduce method iterates through the array.

//   Once all the elements have been processed, the final value of the accumulator is returned as the total product of all the numbers in the array.



//   const arr1 = [1, 2, 3, 4, 5];
//   console.log(productWithReduce(arr1)); // 120

//   const arr2 = [-1, 2, -3, 4, -5];
//   console.log(productWithReduce(arr2)); // 120

//   const arr3 = [2];
//   console.log(productWithReduce(arr3)); // 2
