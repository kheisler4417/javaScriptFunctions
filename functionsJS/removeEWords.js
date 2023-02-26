function removeEWords(sentence) {
    let words = sentence.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (!words[i].includes("e")) {
            result.push(words[i]);
        }
    }

    return result.join(" ");
}




// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'
