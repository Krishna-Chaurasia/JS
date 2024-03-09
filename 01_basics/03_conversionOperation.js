
// ** Conversion in Number  **



let score = "33"
let score1 = "44abs"
let score2 = null
let score3 = undefined
let score4 = true

console.log("\ntype checking for all scores\n");
console.log(typeof score);
console.log(typeof (score1));
console.log(typeof (score2));
console.log(typeof (score3));
console.log(typeof (score4));

console.log("\nprinting all score values\n");

console.log(score);
console.log(score1);
console.log(score2);
console.log(score3);
console.log(score4);

console.log("\nconverting all score variable's value into number datatype \n");

let valueInNumber = Number(score)  // "33" => this string can be converted to number, so o/p is 33
let valueInNumber1 = Number(score1)  // "33abs" => this string can't converted to number, so o/p is NaN
let valueInNumber2 = Number(score2)  // null => o/p is 0
let valueInNumber3 = Number(score3)  // defined => o/p is NaN, can't convert in number
let valueInNumber4 = Number(score4) // true => o/p is 1 or false => o/p is 0, this can be converted to number

console.log("\nnow checking the type of all scores after converting in number datatype\n");

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(typeof valueInNumber2);
console.log(typeof valueInNumber3);
console.log(typeof valueInNumber4);

console.log("now printing the values of all valueInNumber's value \n")

console.log(valueInNumber) //output : 33
console.log(valueInNumber1) //output : NaN i.e not a number because this string can't converted to number
console.log(valueInNumber2) // null means 0
console.log(valueInNumber3)  // undefined is not a number
console.log(valueInNumber4) //output : 1 (boolean(true) is converted into number)



// ** Conversion in Boolean **

let isLoggedIn = 1
let isLoggedIn1 = 0
let isLoggedIn2 = ""
let isLoggedIn3 = "krishan"

console.log(" \n\n converting isLoggedIn's value into boolean \n\n")

let booleanIsLoggedIn = Boolean(isLoggedIn) // 1 => converted to 'true'
let booleanIsLoggedIn1 = Boolean(isLoggedIn1) // 0 => converted to 'false'
let booleanIsLoggedIn2 = Boolean(isLoggedIn2) // "" => converted to 'false'
let booleanIsLoggedIn3 = Boolean(isLoggedIn3) // "krishan" => converted to 'true'

console.log("\n printing converted 1, 0 ,inverted commas to boolean\n")

console.log(booleanIsLoggedIn)   // o/p true
console.log(booleanIsLoggedIn1)  // o/p false
console.log(booleanIsLoggedIn2)  // o/p false
console.log(booleanIsLoggedIn3)  // o/p false


// ** same as conversion can be done in string