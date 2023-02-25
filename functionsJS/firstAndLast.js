function firstAndLast(arr) {
    if(arr.length === 0)
        return "empty array"
    else {
        let first = arr[0]
        let last = arr[arr.length - 1]
        if (arr.length % 2 === 0)
            return first + last
        else
            return first - last
    }


}


console.log(firstAndLast([1, 2, 3, 4]));    // 5
console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
console.log(firstAndLast([12, 5]));         // 17
console.log(firstAndLast([12]));            // 0
console.log(firstAndLast([7, 11, 3]));      // 4
console.log(firstAndLast([]));      // empty array
