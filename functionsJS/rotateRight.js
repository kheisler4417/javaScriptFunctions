const rotateRight = function (array, num) {
    const newArray = array.slice(); // create a copy of the original array
    for (let i = 0; i < num; i++) {
        const lastElement = newArray.pop(); // remove last element
        newArray.unshift(lastElement); // add last element to the front
    }
    return newArray;
};



// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]
