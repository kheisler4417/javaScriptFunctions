const popper = function (array, num) {
    let removedElements = [];
    for (let i = 0; i < num; i++) {
        const element = array.pop();
        removedElements.push(element)
    }
    return removedElements;
};



// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ['kale', 'spinach', 'collard greens', 'cabbage'];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]
