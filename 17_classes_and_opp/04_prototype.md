```javascript
// let myName = "    Krishna    "
// let mychannel = "  chai    "
// console.log(myName.length);
// console.log(myName.trim().length); // will trim first then give's its lenght

let myHeros= ["thor", "spiderman"]

let heroPower  = {
    thor: "hammmer",
    spiderman: "sling",

    getSpiderPower: function()
    {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

console.log("\n****adding own function/Object to Object in Js*****\n");

//creating an own object/function(krishna) and by doing we can access top level hierarchy(Object) of the system
// we have given a power named krishna to all object of js
Object.prototype.krishna = function(){
    console.log(`Krishna is present in all objects `);
}
heroPower.krishna(); // now heroPower will get krishna function's all property
myHeros.krishna(); // now myHeros will get krishna function's all property

//prototype of krishna() is injected in Object, which is at top hierarchy so everyone can has power to access krishna()
//hence Objects, Stings, Functions,Arrays,etc.. can access the properties of krishna()


console.log("\n****adding own function to Array in Js****\n");
//Now in Array, injecting our own function(i.e heykrishna) and by doing we can access top level till Arrays only of the system
// we have given a power named krishna to all Arrays of js

Array.prototype.heykrishna = function(){
    console.log("Krishna says hello in Arrays");
}
myHeros.heykrishna(); //as myHeros is Array so, it technically it will accept the prototype of heykrishna()

//heroPower.heykrishna();//as heroPower is Object so, it can not accept the prototype of heykrishna() which is for Arrays only

//prototype of heykrishna() is injected in Arrays, No one other than Array has power to access heykrishna()
//hence Objects, Stings, Functions can't access the properties of heykrishna()

//*********check the image of flow of power of prototype  *****/


//******** INHERITANCE *****/

console.log("\n ***now working on inheritance*** \n");

const user = {
   name: "chai",
   email: "chai@google.com"
}

const Teacher ={
    makeVide: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssingment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport  //doubleUnderscore(__proto__)doubleUnderscore
    // __proto__:TeachingSupport  :: now TASupport can access the properties of TecahingSupport
}
//we can also give inheritance outside the object
Teacher.__proto__= user   // now Teacher can access the properties of user

//modern syntax of inheritance
//setProtototypeOf: is a method of and Object 
Object.setPrototypeOf(TeachingSupport, Teacher) // now TeachingSupport can access the properties of Teacher

let anotherUsername= "   ChaiAurCode      ";

String.prototype.trueLength = function(){  // making trueLength as function and will accept string
    console.log(`${this}`); // will get reference of any variable value i.e being passed of string type
                            // only single string there so, no need to give this.vari, only this is enough
    console.log(`True length is :  ${this.trim().length}`); //will trim, this's value and then give its length
}

anotherUsername.trueLength()
"krishna".trueLength();
"iceTea".trueLength()

//for next file 
// call, bind and apply concept
```