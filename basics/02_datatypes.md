// javascript's engine is hidden inside browser

"use strict"; // it treats all JS code as newer version/js
              // and there is no way to use someting like "no use strict"

// if we are writing js code in console of chrome browser, then it is document format

//alert(3+3)  // we are using nodejs, not browser

// console.log(3+3)  console.log("Krishna")   // it will give error because no readability

```javascript
console.log(3+3);  console.log("Krishna")  // code readability is fine but not good
```
```
output:
6
Krishna
```

```javascript
console.log("\n"
          + 3
    +3)   //will work but not good practice
```
```
output:

33
```

//below  code readability is better
``` javascript
console.log("\n"+7+3) 
console.log("Krishna chaurasia")
```
```
output:

73
Krishna chaurasia
```
//Actual code starts here

```javascript
console.log("\nActual code starts here\n")

let name = "Krishna"
let age = 18
let isLoggedIn = false
let state;
 
// ** Primitive DATATYPES  ** 

// number => 2 to power 53
// bigint
// string => ""/''  i.e double/single quote
// boolean => true/false
// null => standalone value, or a kind of value or message
// undefined => value is not yet assigned to datatype's variable
// symbol => to identify the uniqueness of anything mostly used in react


// **  Object  ** 

console.log(typeof null);  //null is a object
console.log(typeof undefined);  //undefined
console.log(typeof age)
```
```
output:

Actual code starts here

object
undefined
number
```