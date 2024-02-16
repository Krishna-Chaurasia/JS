// if 
const condition = true
if(condition){  // condition true then this scopw will execute if statements
  console.log("if");
}

else if(false){
     console.log("else if")
}

//condition can be <,>, <=,>= , ==, !=, ===(strict checking i.e datatype also)
// we can also use multiple conditions like && ||  

else {
    console.log("else")
}

// implicit if condition's scope
const balance = 1000 
if(balance > 500) console.log("test"),  // use , for multiple lines and use ; to end the implicit scope
  console.log("test 2");   


// *********** Interesting ***********
// truthy values : it means when condition is not checked/matched

// ******* falsy and truthy values *******8
// falsy values : false, 0, -0, null, undefined, NaN, "", BigInt(with 0n)

// truthy values : "0", 'false', " ",[],{}, function(){}
 
console.log("\ntruthy values : when string has string\n")

const userEmail = "krishna@gamil.com"
if(userEmail){  // userEmail is not verified but still considered as true
    console.log("got user email ")
}
else{
    console.log("don't have user email ");
}

console.log("\ntruthy values : when string is empty string not even single space\n")

const userEmail_01 = ""
if(userEmail_01){  // now this time it will considered as false becase of empty string not even singl space
    console.log("got user email ")
}
else{
    console.log("don't have user email ");
}



console.log("\ntruthy values : when string is empty string having single space\n")

const userEmail_02 = " "
if(userEmail_02){  // now this time it will considered itself as true because  having space
    console.log("got user email ")
}
else{
    console.log("don't have user email ");
}


console.log("\ntruthy values : when string is empty/non-empty array is given\n")

const userEmail_03 = []  // or [4,5,]
if(userEmail_03){  // now this time it will considered itself as true because  array is given 
                  // array can be empty or non empty, will always execute if() condition
    console.log("got user email ")
}
else{
    console.log("don't have user email ");
}


// *******Arrays *******
console.log("\n Arrays to check if it is empty or not \n")

const arr = []
if(arr.length === 0){  // to check wheather array is empty or not 
    console.log("Arry is empty")
}

// ******* Objects *******
console.log("\n Object to check if it is empty or not \n")

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){ // Object.keys(emptyObj) :: this gives keys in form of arrays
                                        // to check wheather object is empty or not 
    console.log("Object is empty")
}

/*
All below conditions are true : 

1) false == 0
2) false == ''
3) 0 ==''

*/

// +++ Nullish Coalescing Operator (??) :: it works on null and undefined

console.log("\n Nullish Coalescing Operator (??) :: it works on null and undefined \n")

let val1;
 val1 = 5 ?? 10 // 5 will be stored in val1

 console.log("val1 : " , val1); 

 let val2;
 val2 = null ?? 10 // 10 will be stored in val2

 console.log("val2 : ", val2)

 var val3;
 val3 = undefined ?? 110 // 110 will be stored in val3

 console.log("val3 : ", val3)


 var val4;
 val4 = undefined ?? 74 ?? 110 // 74 will be stored in val3 , in this case 1st value will be assigned to val4

 console.log("val4 : ", val4)


// +++ Ternary Operator

console.log("\n Ternary Operator \n")

// syntax :: condition ? true : false





