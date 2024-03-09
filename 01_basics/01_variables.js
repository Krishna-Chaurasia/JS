// in js, semicolan(;) is optional

// Js is Dynamically Typed or loose typed language i.e no need to declare type of variables


console.log("kris")  
 //console.log("kris") : this keyword us to display something on screen same as printf() in c

 
const accountId = 1444553   //const : can't be changed
let accountEmail = "kishn@google.com" // 
var accountPassword = "4555fd"
accountCity = "Jaipur"

//all these codes are analysed by node js 

// accountId = 2  //not allowed as it is constant  
accountEmail = "her@gmail.com"
accountPassword = "456774"
accountCity = "Mumbai"

console.log(accountId)

let accountState;

// console.table([a, b, c, d])  // use to print multiple variable at once like a,b,c,d in tabular structure
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]) 

//accountState's value is undefined right now


// to declare constant in js use 'const' keyword

/* 

to declare variable in js we can use  let and var

1)var : Prefer not to use 'var' keyword because of issue in block scope and functional scope, 
        'var' does not support scope i.e {   } brackets e.g if{ }, for(,,){ }

2) let: use 'let' keyword because it overcomes the problem of 'var' keyword i.e problem of scope

*/


//all these codes are analysed by node js 