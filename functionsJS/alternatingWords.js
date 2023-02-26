function alternatingWords(words) {
    let isUppercase = true;

    for (let i = 0; i < words.length; i++) {
        if (isUppercase) {
            words[i] = words[i].toUpperCase();
        } else {
            words[i] = words[i].toLowerCase();
        }

        isUppercase = !isUppercase;
    }
}



// let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

// let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
