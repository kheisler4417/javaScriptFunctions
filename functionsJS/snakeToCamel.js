function snakeToCamel(snakeCase) {
    // Split the snake_case string into separate words
    const words = snakeCase.split('_');

    // Capitalize the first letter of each word and convert the rest to lowercase
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    // Join the capitalized words into a PascalCase string
    const pascalCase = capitalizedWords.join('');

    // Return the PascalCase string
    return pascalCase;
}



// console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
// console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
// console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
// console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
