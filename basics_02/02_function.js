// Rest Operator(...) : its notation is same like Spreadoperator(...), which means it checks the no. of arguments passed
//                 to the function and returns all arguments in the form of array

function calculateCartPrice(...num1){  // here only one parameter is given with rest operator, but if more than one agrument 
                                      // given then it will return all those argument in th form of array 
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

// ********creating new function *******
console.log("\nCreating new function calculateCartPrice_01()\n")

function calculateCartPrice_01(val1, val2, ...num1){    // 1st and 2nd argument goes to val1,val2 and remaining all argument 
                                                      // goes to num1 
    return num1
}

console.log(calculateCartPrice_01(100, 200, 300,499, 599, 203))// 1st and 2nd argument goes to val1,val2 and remaining all 
                                                              // argument goes to num1 

/*  ****** This is not true******

function cal(val1, val2, ...num1, val3){    // Rest operator(...) should be use as a last parameter only

    return num1 
}

*/

// ******** Using already created objects variable in a function(anyobject) parameter **********

// ****** creating object ********

console.log("\nCreating object named, user { } ")

const user = {
    username: "krishna",
    price: 199
}

// *****creating another function handleObject(anyobject){ } *********

console.log("Creating new function handleObject(anyobject)\n")


function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

handleObject(user) 
console.log("\n Creating object at the time of passing argument to function \n")

handleObject({
    username: "sam",
    price:899
}) 



// ******** Using already created Array variable in a function(anyArray) parameter **********

// ****** creating Array ********

console.log("\nCreating Array named,  myNewArray[] ")

const myNewArray = [200,344, 564,643,123,456]
// *****creating another function returnSecondValue(anyArray){ } *********

console.log("Creating new function returnSecondValue(anyArray)\n")

function returnSecondValue(anyArray){

   return anyArray[1]
}

console.log(returnSecondValue(myNewArray))

console.log("\n Creating Array at the time of passing argument to function \n")
 
console.log(returnSecondValue([21,34,56,765,43]))











































