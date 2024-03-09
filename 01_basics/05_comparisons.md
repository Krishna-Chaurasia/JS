// below comparisons will give output in boolean
// while comparing datatypes must be same else favourable output may not come
/*
```javascript
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1);
console.log(2!=1)
```
``` 
output:
true
true 
false
false
true
```
*/
```javascript
console.log(null>0)
console.log(null==0)
console.log(null<0)
console.log(null>=0)
console.log(null<=0)
console.log(null>=1)
console.log(null<=2)
```
```
output:
false
false
false
true 
true 
false
true
```
//all undefined comparision gives false
// avoid null and undefined comparisions

```javascript
console.log(undefined>0)
console.log(undefined==0)
console.log(undefined<0)
console.log(undefined>=0)
console.log(undefined<=0)
```
```
output:
false
false
false
false
false
```

```javascript
// console.log("2" > 1) //true : as "2" string 2 is auto converted to number
// console.log("02" > 1) //true : as "02" string 2 is auto converted to number
//  console.log("02" == 2 ) // true : as "02" string 2 is auto converted to number
```
```
output:
true
true 
true
```
// === : is strict comparision i.e datatype of both comparing values must be same

```javascript
console.log("2" === 2) //false : as "2" string and 2 is number
console.log("02" > 1) //true : as "02" string 2 is auto converted to number

console.log(2 === 2) // true : as both 2s are same datatype
console.log(2 === 3) // false : as both values are of same datatypes
```

```
output:
false
true 
true 
false
```



