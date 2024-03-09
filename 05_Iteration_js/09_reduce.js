// reduce  : it has accumulator and currvalue ; mostly used in shopping cart features

console.log("\n using redce method with function() just like map, filer, farEach etc.\n")
const myNums = [1,2,3]
// acc is accumulator and currval is currentvalue

const mytotal = myNums.reduce(function(acc,currval) {
    console.log(`acc: ${acc} and currvalue: ${currval}`); // currvalue : is the sequence wise values of array 
    return acc + currval  // 1st 2 +1 ; 2nd 3+2 ; 3rd 5+3
      // acc = return i.e sum of acc + currvalue ; everytime
},2) // 2 means acc starts  with 2

console.log(mytotal) // o/p 8

// reduce with arrow function
console.log("\n using redce method with arrow function() just like map, filer, farEach etc.\n")



const mytotal_01 = myNums.reduce( (acc,currval) => acc + currval ,0) // 0 means acc starts  with 0

console.log(mytotal_01) // o/p 6

// Applying reduce with shopping cart
console.log("\n Applying reduce with shopping cart \n")

const shopping = [
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 1499
    },
    {
        itemName: "dev course",
        price: 1299
    },
]

const shoppingCart = shopping.reduce( (acc,item) => acc + item.price ,0) // 0 means acc starts  with 0
console.log(shoppingCart) 

 


