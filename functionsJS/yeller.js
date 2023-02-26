function yeller(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        result.push(words[i].toUpperCase() + "!");
    }
    return result;
}




// console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
// console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
