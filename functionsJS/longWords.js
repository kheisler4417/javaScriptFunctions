function longWords(words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 5) {
            result.push(words[i]);
        }
    }
    return result;
}



// console.log(longWords(['bike', 'skateboard', 'scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka', 'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]
