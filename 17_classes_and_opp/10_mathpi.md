```javascript
//Object.getOwnPropertyDescriptor() : it tells hidden features of the object

//enumerable : means property of repetition

/*
console.log(Math.PI) // tells universal constant value i.e 3.14159..
// trying to overwrite the value of Math.PI
Math.PI = 5;
console.log(Math.PI) // will not the value of Math.PI from 3.14 to 5 
 */



const descripter = Object.getOwnPropertyDescriptor(Math)

console.log(descripter) // o/p : undefined ; because we have not given property of object Math
console.log(Math) // o/p : Object [Math] {}
console.log(typeof(Math)) // o/p object

const descripter1 = Object.getOwnPropertyDescriptor(Math,"PI") // PI is key of Math : we need to provide it

console.log(descripter1)  // we will get all details of PI of Math
                        //o/p : { value: 3.141592653589793,writable: false,enumerable: false,configurable: false}
                       // here writeable is false so we can't change PI's value 

// creating our own object 

console.log("\ncreating our own object \n");

const mynewObject = Object.create(null) // bydefault value of null present in object
// or creating object directly 
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("code is burst or chai nhi bani");
    }
}
console.log(chai)
console.log("\n using Object.getOwnPropertyDescriptor(chai) with object \n")

console.log(Object.getOwnPropertyDescriptor(chai));//o/p: undefined: because only object name is given,
                                       // its property is not given like name, price or isAvailable

console.log(Object.getOwnPropertyDescriptor(chai,'name'));//now we have given one of the property name of chai i.e name
                               //o/p : { value: 'ginger chai' ,writable: true,enumerable: true,configurable: true}

//changing the properties of object chai by Object.defineProperties(chai,'name',{ }); here chai is object, 
//name is property and { } is new definition


console.log("\n applying for loop on object chai \n");

/* 
//this code's syntax is not true
for (let [key,value] of chai) {
    console.log(`${key} : ${value}`);
}
*/

for (let [key,value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`); // we will get full value of orderChai
}
console.log("\nnew iteration\n")
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`); // orderchai will not print 
    }
}


console.log("\nchanging the value of property of object named chai \n")

Object.defineProperty(chai,'name',{
    writable: false, //now no one can change the value of property name because the writable is false
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

console.log("\nnew iteration after making emumerable : false\n")
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        // as emumerable of name property is false, so will not execute 
    console.log(`${key} : ${value}`); // orderchai will not print 
    }
}

//ES: ecma script 6 

// MVC :: 

```