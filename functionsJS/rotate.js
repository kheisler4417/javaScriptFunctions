const rotate = function (array, num) {
    const absNum = Math.abs(num);
    for (let i = 0; i < absNum; i++) {
        if (num > 0) {
            const lastElement = array.pop(); // remove last element
            array.unshift(lastElement); // add last element to the front
        } else {
            const firstElement = array.shift(); // remove first element
            array.push(firstElement); // add first element to the end
        }
    }
};



// let arr = ['a', 'b', 'c', 'd', 'e'];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
