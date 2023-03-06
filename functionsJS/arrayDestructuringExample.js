// Time to practice array destructuring! We have given you an array.
// Practice destructuring arrays by assigning variables to every value
// in the array below all in one line of code.Check your work by
// console.loging each of the variables to make sure you got them all.

let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"

let [fruit, num1, num2, num3, obj, [fruit2]] = bigArray;

console.log(fruit);    // "apple"
console.log(num1);     // 14
console.log(num2);     // 32
console.log(num3);     // 100
console.log(obj);      // { name: "party" }
console.log(fruit2);   // "pineapple"
