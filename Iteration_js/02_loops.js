// while loop 
console.log("\n using while loop \n")

let index = 0 
while (index <=5) {
    console.log(`value of index is ${index}`);
    index = index+2;
}
// *****Array *******
console.log("\n using array in loop \n")
let myArray = ['flash', 'batman','superman']
let arr = 0 
while (arr < myArray.length) {
    console.log(`value of index is ${myArray[arr]}`);
    arr = arr +1;
}

// do-while loop  : it runs atleast one time even if condition is false
console.log("\n do while loop \n")

let score = 11

do {
    console.log(`Score is ${score}`)
    score++
} while (score <=10);  









