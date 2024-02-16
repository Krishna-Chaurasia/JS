// There are two types of memory; 1st : Stack , 2nd : Heap

// All primitive datatype are uses stack memory; Stack memory gives copy of the actual variable's value to other variable,
   // so changes made in other variable does not reflect in actual variable 

// All Non primitive datatype uses heap memory; heap memory gives the address/reference of the actual variable to other variable,
   // so changes made in other variable reflects in actual variable 

/*   
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

console.log("userOne var's value before passed to another var. : " + userOne.email + "\n") // o/p: user@google.com 

let userTwo = userOne // as userOne is Non-primitive so its actual address/memory is passed to userTwo

userTwo.email = "hitesh@google.com"   //changes made in userTwo's email variable will reflect in userOne 

console.log("userOne var's value after passed to another var. : " + userOne.email + "\n")   // o/p: hitesh@google.com 
console.log("userTwo var's value. : " + userTwo.email + "\n")   // o/p: hitesh@google.com 

*/

// modern way of displaying strings with variable in console is to use backtiks ` `

const name = "Krishna"   // one way of declaring string
const repoCount = 50 
