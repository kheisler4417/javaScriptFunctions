function initials(name) {
    // Split the name into separate words
    const words = name.split(' ');

    // Use the first letter of each word to create the initials
    const initials = words.map(word => word.charAt(0).toUpperCase());

    // Join the initials into a single string and return it
    return initials.join('');
}



// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'
