// (IIFE) : Immediately Invoked Function Expressions
// it is used to get rid of pollution from globla scope 
// so to remove global scope's pollution or problem we use IIFE
//  IIFE : it is used to immediately call the function() being created just now

//syntax : (function's definition)() // (); : at the end of function() definition is called calling the function
                                     // and ; is used to end the function being invoked

```javascript
(function chai(){  //called as named IIFE becasuse it has chai as a name
    console.log(`BD connedted`);
})();  // (); : here () used to call fun. and ; is used to end the function being invoked

// chai() // o/p : error, now we can't call the created function chai()


// ******* Creating IIFE with arrow function *********


console.log("\nCreating IIFE with arrow function (=>)\n");  // here ; is needed else arrow fun. will not work

( (name) => { //called as simple IIFE becasuse it has no name
    console.log(`${name}, db connedted to IIFE`);
} )('krishna')
```
```
output:
BD connedted

Creating IIFE with arrow function (=>)

krishna, db connedted to IIFE
```
 

 



