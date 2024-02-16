/*

const score = 400   //here score var. automatically defines itself as Number type
console.log(score); // sometimes score may or may not be number datatype

const balance = new Number(100.568  )  //here balance var. is specifically defined as Number datatype 
console.log(balance)

//******number to string type ********
console.log("\nnow working with number to string\n")
console.log(balance.toString()); // now balance type(num) is chnaged to string type
console.log(typeof balance.toString());

//******number to string type with length() method ********
console.log("\nnow working with number to string's length() \n")
console.log(balance.toString().length);
console.log(typeof balance.toString().length); //its typeof is number


//******number's toFixed() method ********
console.log("\nnow working with number's toFixed() method \n")
console.log(balance.toFixed(2));  // will give values upto 2 decimal points
console.log(typeof balance.toFixed(2)); //its typeof is number

const otherNumber = 23.8966
//******** Number's toPrecision() method *********
console.log("\nnow working with number's toPrecision() method \n")
console.log(otherNumber.toPrecision(3));  // will give 3 digit values
console.log(typeof otherNumber.toPrecision(3)) // when we use toPrecision() method on number type, then it changes number type to String datatype


const hundreds = 10000000 //difficult to read
//******** Number's toLocaleString() method *********
console.log("\nnow working with number's toLocaleString() method \n")
console.log(hundreds.toLocaleString());  // helps to read in easy way by adding commas on basis of Indian standard 
console.log(hundreds.toLocaleString('en-US'));  // helps to read in easy way by adding commas on basis of US standard 
console.log(typeof hundreds.toLocaleString()) // when we use toLocaleString() method on number type, then it changes number type to String datatype

*/
 
//+++++++++++++++++++++  Maths ++++++++++++++++++++++

// Math libreary is available inbuilt in js

console.log(Math) // its gives object [Math] { }

//******** Math library's abs() method *********
console.log("\nnow working with Math library's abs() method \n") 
 
//abs : it gives absolute values i.e always +ve values

console.log(Math.abs(-4))  // Math's abs method gives +ve values
console.log(Math.abs(4)) // already +ve

//******** Math library's round() method *********
console.log("\nnow working with Math library's round() method \n") 
 
//round : it will round off the given values 

console.log(Math.round(-4.6))  // o/p : -5
console.log(Math.round(-4.5)) // o/p : -4
console.log(Math.round(-3.4)) // o/p : -3
console.log(Math.round(3.5)) // o/p : 4
console.log(Math.round(3.4)) // o/p : 3
console.log(Math.round(3.6)) // o/p : 4

//******** Math library's ceil() & floor() method *********
console.log("\nnow working with Math library's ceil() & floor() method \n") 
 
//ceil : it the no. is in decimal, the takes top value e.g 4.2 gives 5
//floor : it the no. is in decimal, the takes bottom value e.g 4.2 gives 4

console.log(Math.floor(-4.6))  // o/p : -5
console.log(Math.floor(-4.5)) // o/p : -5
console.log(Math.floor(3.4)) // o/p : 3
console.log(Math.floor(3.5)) // o/p : 3

console.log(Math.ceil(-4.6))  // o/p : -4
console.log(Math.ceil(-4.5)) // o/p : -4
console.log(Math.ceil(3.4)) // o/p : 4
console.log(Math.ceil(3.5)) // o/p : 4

//******** Math library's min() & max() method *********
console.log("\nnow working with Math library's min() & max() method \n") 

//min(): it gives the min. value of array
//max(): it gives the max. value of array

console.log(Math.min(4,3,1,7,2)) // o/p : 1
console.log(Math.max(4,3,1,7,2)) // o/p : 7
 
//******** Math library's random() method *********
console.log("\nnow working with Math library's random() method \n") 

//random(): it gives random values between 0 to 1

console.log(Math.random()) 
console.log(Math.random()*10)    // if val = 0.041 then will give 0 .41 i.e 0 value will come
console.log(Math.random()*10 +1 )   // if val = 0.041 then will give 1.04 i.e no 0 value
console.log(Math.floor(Math.random()*10) +1 )   // if 4.55 then o/p = 4

const min = 20
const max = 40

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // we will get min 20


 

