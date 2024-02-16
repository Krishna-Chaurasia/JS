 // kis tarah data ko memory me rakha jata hai aur use kaise access karte hai, us basis pe data ke 2 categorization hai
 // 1st datatype is # Primitive 
 // 2nd datatype is # Non primitive or Reference type 

 /*
 1st # Primitive: these are call by value i.e original reference(address) of memory of actual data is not provided to others, but copied values are provided
                  Primitive types are String, Number, Boolean, null, undefined, symbol, bigInt
     
 2nd # Reference type(Non primitive) : these are call by reference i.e original reference(address) of memory of actual data is provided to others. 
                 Non-Primitive types are Arrays, Objects, Functions
 */
 
 ```javascript
const id = Symbol(123) //return new unique value 
//const anotherId = Symbol(123) //return new unique value 

 //console.log(id === anotherId) //false, still both values are same in Symbol

 const bigNumber = 345553678907643124567965n //at the end of number need to give 'n' small n only
//  console.log(typeof bigNumber)  //bigInt

//*** Reference Type (Non primitive) ***** 

// 1: arrays [, , , ,]
const heros = ["shaktiman","naagraj", "doga"] // arrays

// 2: Objects {  } ; things which are in curly brackets
                  //objects can also be stored in any variable its optional 
let myObj = {
    name: "Krishna",
    age: 22,
}

// 3: Functions  : Function can be treated as variables in JS
               // function's definition ; function(){ }

// storing function in variable 
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof heros) // o/p : object but it is in array
```
```
output:
function
object
object
```




