
// ********Definition of function***********

function sayMyName(){   // here 'sayMyName' is reference through which we will call this function 

    console.log("K");
    console.log("R")
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}

 // To execute function, apply parenthesis() after reference name of function e.g sayMyNaem()

 sayMyName() // this will dispay all the things given inside the function

//************* */ adding numbers using function ****************
console.log("\nadding numbers using function\n")
// below function will not return anything
function addTwoNumbers(number1, number2){  // here, number1 and number2 are parameters
    console.log(number1  +  number2)
}

addTwoNumbers(3,4) // here, // 3,4 are arguments
const result = addTwoNumbers(3,4)  // here result variable will not hold o/p of addTwoNumber() sum
console.log("result: ",result) //o/p undefined

// ***************** adding numbers using function ******************
console.log("\nadding numbers using function with different method\n")

function addTwoNumbers1(number1, number2){ 
    let result = number1 + number2
    //console.log("fdsf ") this will work
    return result  // now this function will return 'result' variable
    // or 
    // return number1 + number2
    console.log("krishna kumar chaurasia")  // this line will not work because it is after return statement in the function
}

addTwoNumbers1(34,4) // this will not print anything because there no console.log() in function addTwoNumbers1()

const result1 = addTwoNumbers1(34,4)   // will not print anything because there no console.log() in function addTwoNumbers1()
console.log("result : ",result1)

// *****************displaying loginUserMessage() function**************

console.log("\nDisplaying loginUserMessage\n")

function loginUserMessage(username){

    return `${username} just logged in`

}

// now executing function loginUserMessage()
loginUserMessage("kumar")  // will not print anything because there is no console.log() in function loginUserMessage()
console.log(loginUserMessage("Krishna"))
console.log(loginUserMessage()) // o/p: undefined , because loginUserMessage(username) has parameter but no argument is passed in function loginUserMessage()


// *************** Applying if-else in loginUserMessage_01() function  **************
console.log("\nApplying if-else in loginUserMessage_01\n")

function loginUserMessage_01(username){

    if(username === undefined){  // if(!username) { }

        console.log("Please enter a username ")
        return  // if this condition true then below code will not execute
    }

    return `${username} just logged in`

}

// now executing function loginUserMessage_01()

loginUserMessage_01("kumar")  // will not print anything because there is no console.log() in function loginUserMessage_01()
console.log(loginUserMessage_01("Krishna"))
console.log(loginUserMessage_01()) // if condition will be checked, as no argument is given


//********** Applying default value in parameter of loginUserMessage_02() function***************

console.log("\nApplying default value in parameter of loginUserMessage_02() function\n")

function loginUserMessage_02(username = "sam"){// now default value is sam, if no argument is given then sam will be taken as default
    
// no need of if-else condition if default value is given

    // if(!username){ 

    //     console.log("Please enter a username ")
    //     return  // if this condition true then below code will not execute
    // }
    
    return `${username} just logged in`
}

// now executing function loginUserMessage_02()

loginUserMessage_02("kumar")  // will not print anything because there is no console.log() in function loginUserMessage_02()
console.log(loginUserMessage_02("Krishna"))
console.log(loginUserMessage_02()) // here, no argument is provided, so defualt value i.e sam will execute





