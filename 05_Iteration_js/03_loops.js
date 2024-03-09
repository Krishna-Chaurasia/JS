// for of  loop :: it is used for arrays 

console.log("\n for-of loop on arrays \n")
const arr = [1,2,3,4,5]

for (const num of arr) {  // here for-of loop automatically takes length,size etc of array or object or strings
    console.log(num)
}

console.log("\n for-of loop on strings \n")
const greetings = "Hello world"

for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


// Maps :: it is a object which holds key-value pairs and remembers the original insertion order of the keys.
// No duplicate key-values in the map 
console.log("\n Using Map \n")

const map = new Map()
map.set('IN',"India")  //IN is key and India is value  
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India") // this value will not go into map becaue same is declared abve 
map.set('IN',"Ind") // this will replace IN's key's value to Ind from India
map.set('I',"India") // this value will go into map becaue same key is different but still value is same 

console.log(map)

console.log("\n for-of loop on map \n")

for (const key of map) {
    console.log(key) // it gives in the form of Arrays
}

console.log("\n for-of loop on map with destructuring of key,value \n")

for (const [key, value] of map) {
    console.log(key, ":--" , value) // it gives in key value pairs
}


// for- of loop on objects

console.log("\n for-of loop on object \n")
const myObject = {
    'game1': "NFS",
    'game2': "spiderman"

}

/* 

//below loop will not work, because it is not iteratable in this way 

for (const [key, value] of myObject) {
    console.log(key, ":--" , value) 
}

*/

