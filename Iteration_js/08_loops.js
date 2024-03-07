// Maps :: 

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map( (num) => {return num+10}) // will add +10 in each myNumbes value

console.log(newNums);

// ******* Chaining methods: means applying multiple maps/filters together ****
console.log("\nChaining methods: means applying multiple maps/filters together\n")
 
const newNums_01 = myNumbers
                   .map( (num) => num*10)
                   .map( (num) => num+2)
                   
console.log(newNums_01)


console.log("\nChaining methods with filters \n")
 
const newNums_02 = myNumbers
                   .map( (num) => num*10)
                   .map( (num) => num+5)
                   .filter( (num) => num >= 53)

                   
console.log(newNums_02)
