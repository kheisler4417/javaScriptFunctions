function sameCharCollapse(str) {
    let result = str;
    let i = 0;
    while (i < result.length - 1) {
        if (result[i] === result[i + 1]) {
            result = result.substring(0, i) + result.substring(i + 2);
            if (i > 0) {
                i--;
            }
        } else {
            i++;
        }
    }
    return result;
}

// console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// // because zzzxaaxy -> zxaaxy -> zxxy -> zy
// console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// // because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
