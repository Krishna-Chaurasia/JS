//forin loop : it is used for objects 
```javascript
const myObject = {
    js:"javascript",
    cpp:"C++",
    rb:"rubby",
    swift: "swift by apple"
}

console.log("\ndisplaying objects keys using Forin loop\n")

for (const key in myObject) {
    console.log(key)  // it will prints all keys only not its respective vales
}

console.log("\ndisplaying objects values using Forin loop\n")

for (const key in myObject) {
    console.log(myObject[key])  // it will prints all values only without its respective keys
}


console.log("\ndisplaying objects key-values using Forin loop\n")

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)  // it will prints all values only without its respective keys
}

// ***** applying forin loop on Arrays ******
console.log("\ndisplaying arrays indexing no. using Forin loop\n")

const programming = ['js','rb','py','java','cpp']
for (const key in programming ) {
    console.log(`${key}`)  // it will prints all indexes no. only without its respective values
}

console.log("\ndisplaying arrays values using Forin loop\n")

for (const key in programming ) {
    console.log(`${programming[key]}`)  // it will prints all indexes no. only without its respective values
}

// **** applying forin loop on Map object ******

console.log("\n applying forin loop on Map object \n")

const map = new Map()
map.set('IN',"India")  //IN is key and India is value  
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India") // this value will not go into map becaue same is declared abve 
map.set('IN',"Ind") // this will replace IN's key's value to Ind from India
map.set('I',"India") // this value will go into map becaue same key is different but still value is same 

for (const key in map) {

    console.log(key)   // it will give no output without any error
                      // because maps are not iterateable, so can't access like this
}
```
```
output:

 for-of loop on arrays 

1
2
3
4
5

 for-of loop on strings

Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d

 Using Map

Map(4) {
  'IN' => 'Ind',
  'USA' => 'United States of America',
  'Fr' => 'France',
  'I' => 'India'
}

 for-of loop on map

[ 'IN', 'Ind' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
[ 'I', 'India' ]

 for-of loop on map with destructuring of key,value

IN :-- Ind
USA :-- United States of America
Fr :-- France
I :-- India

 for-of loop on object

```