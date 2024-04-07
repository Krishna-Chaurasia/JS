//default behavior of js is prototypal behavior
// e.g prototype helps to search anything to its parents, grand-parents etc level until it finds it or gets null 
// we get classes, new, this, inheritace etc due to prototypal behavior
//In js almost everything is an object including primitive values and functions, arrays etc.

/*
In JavaScript, everything is essentially an object, or can behave like one, due to the language's 
prototype-based inheritance system. This includes primitive values (such as strings, numbers, booleans, symbols,
     and null), functions, arrays, and objects themselves.

Primitive values like strings, numbers, and booleans have corresponding object wrappers (String, Number, Boolean)
 that allow you to access properties and methods, making them behave like objects in certain contexts.

Functions are also objects in JavaScript, which means they can have properties and methods just like any other object.

Arrays are special types of objects in JavaScript with numeric indices and a length property. They also have built-in
 methods and properties that allow you to manipulate and access their elements.

So while JavaScript does have primitive values like numbers and strings, these primitive values can also act
 like objects due to JavaScript's nature.
*/

function multipleBy5(num){
    return num*5
}
//multipleBy5(5)
multipleBy5.power = 3;

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype) //prototype is an empty parenthesis i.e { }

// hence we can say that function behave like function as well as object as per requirement

console.log("\ncreating a new funciton\n");
function createUser(username,score){
 this.username = username
 this.score = score
} 
// increment is a function(), equate it with function()
createUser.prototype.increment = function(){
//score++; // if we use it only then it may get confused that whom value it should increse whether chai or tea see below
this.score++ ; // now it will increment those score's value who will call it, so won't get confused
}

createUser.prototype.printMe = function(){
  //  console.log(`score is ${score}`); // will get confuse between chai/tea
    console.log(`price is ${this.score}`); // won't get confuse between chai/tea, so shows the value of specific object 
}

/*
const chai = createUser("Chai",25);//when we transfer the values from the function into chai then we didn't 
                                   //tell it about additional properties of printMe(),increment() that we added later
                                   //so, chai.printMe() won't execute. Hence need to provide new keyword which tells chai
                                   //to include other properties of createUser i.e printMe()/increment()

//NOTE: if we have given printMe() and increment() property by default, then there was no need of giving 'new' keyword

console.log(typeof(chai)) // undefined, because no new keyword is used 
chai.printMe()
*/

//just added new keyword
const chai = new createUser("Chai",25);
console.log(typeof(chai)) // object, because new keyword is used 
chai.printMe()

//**** new object */
const tea = createUser("tea",250);
