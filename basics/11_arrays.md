// Arrays 
// collection of multiple items of different datatypes stored in single variable 
// In js arrays are resizeable
// It can store mix datatypes(boolean, string, objects, number etc)
// Listed array: array inside array
// 0 based indexing
```Javascript
const myArr = [0,1,2,3, true, 'krishna']
 console.log(myArr)
 console.log(myArr[0])// indexing starts with 0
```
```
output:
[ 0, 1, 2, 3, true, 'krishna' ]
0
```
// in arrays when we do copy operation then it created shallow copies

/*Shallow copy: a shallow copy of an object is a copy whose properties
share the same references(points to the same underlying values) as those
 of the source object from which the copy was made. 

 In simple words, if changes made in copies array then it will also effect in original array

 Deep copy : a shallow copy of an object is a copy whose properties
  do not share the same references(points to the same underlying values)

In simple words, if changes made in copies array then it will not effect in original array

*/ 
```javascript
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 =  new Array(1,3,5,6) // another way of declaring array

//******Array's push() method ********

//push(5) : will add 5 at the end of the array, In push we need to give an argument

console.log("\nworking with Array's push method \n")

myArr.push(6)
myArr.push(5)
console.log(myArr)
```

```
output:
working with Array's push method

[ 0, 1, 2, 3, true, 'krishna', 6, 5 ]
```
//******Array's pop() method ********

//pop() : will delete the last element, In pop() no need to give argument
```javascript
console.log("\nworking with Array's pop method\n")

myArr.pop()
console.log(myArr)
```
```
output:
working with Array's pop method

[ 0, 1, 2, 3, true, 'krishna', 6 ]
```
//******Array's unshift() method ********

//unshift(9) : will add 9 at the 0th index, In unshift() need to give argument
// it is time consuming, because need to shift all the element by 1 index
```javascript
console.log("\nworking with Array's unshift method\n")

myArr.unshift(9)
console.log(myArr)

//******Array's unshift() method ********

//shift() : will delete the 0th index of element, In shift() no need to give argument
// it is time consuming, because need to shift all the element by 1 index after deleting 1st element

console.log("\nworking with Array's unshift method\n")

myArr.shift()
console.log(myArr)
```
```
output:
working with Array's unshift method

[ 9, 0, 1, 2, 3, true, 'krishna', 6 ]

working with Array's unshift method

[ 0, 1, 2, 3, true, 'krishna', 6 ]
```
//******Array's questionnaire methods ********
```javascript
console.log("\nworking with Array's questionnaire methods\n")

console.log("\n 1. working with Array's inclues() methods\n")

//inclues(8) : will check if 8 is included in array or not, need to give argument datatype will be boolean
console.log(myArr.includes(9)); // false, as there is no 9 in myArr

console.log("\n 2. working with Array's indexof() methods\n")

//indexof('krishna') : will check if 'krishna' is present or not at specific index, it will give o/p as index
//if the given data is not present then will return -1 
console.log(myArr.indexOf('krishna')); //o/p : 5
```

```
output:
working with Array's questionnaire methods


 1. working with Array's inclues() methods

false

 2. working with Array's indexof() methods

5
```


//******Array's join() methods ********
```javascript
console.log("\nworking with Array's join() methods\n")

//join(): it will convert all the different values of array into string datatype
const newArr = myArr.join()  // here all the different type of datatypes used in myArr array var., will convert in string datatype

console.log(`values without join() method whose typeof is "${typeof myArr}" : ${myArr}`)
console.log(`values after join() method whose typeof is "${typeof newArr}" : ${newArr}`) 
console.log("newArr's type : ",typeof newArr)
```
```
output:
working with Array's join() methods

values without join() method whose typeof is "object" : 0,1,2,3,true,krishna,6
values after join() method whose typeof is "string" : 0,1,2,3,true,krishna,6
newArr's type :  string
```
//******Array's slice() methods ********
```javascript
console.log("\nworking with Array's slice() methods\n")

//slice(): it will convert all the different values of array into string datatype

console.log("A original array ", myArr)
const myn1 = myArr.slice(1,3) // prints from index 1 to 2 from original and does not change the original array value

console.log("appling slice(1,3) : ", myn1)
console.log("B original array ", myArr)

const myn2 = myArr.splice(1,3) // prints from index 1 to 3 from original and deletes these values from index 1 to 3 from original array

console.log("appling slice(1,3) : ",myn2)
console.log("C original array", myArr)
```

```
output:
working with Array's slice() methods

A original array  [ 0, 1, 2, 3, true, 'krishna', 6 ]
appling slice(1,3) :  [ 1, 2 ]
B original array  [ 0, 1, 2, 3, true, 'krishna', 6 ]
appling slice(1,3) :  [ 1, 2, 3 ]
C original array [ 0, true, 'krishna', 6 ]
```