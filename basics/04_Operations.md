let value = 3
let ngvalue = -value

```javascript
 console.log(ngvalue);

 console.log(2/3);
 console.log(2%3);
```
```
output:
-3
0.6666666666666666
2
```
```javascript
let str1 = "hello"
let str2 = " Krishna"

let str3 = str1 + str2
console.log(str3) //error

console.log("1" + 2)  // o/p : 12  // string + number = string
console.log(1+"2")   // o/p : 12  // number + string = (sum of nums i.e 1)string i.e 2 ,so 12
console.log("1" + "2") // o/p :12  // string + string = string

console.log(1+2+"2") // o/p : 32  // number + string = (sum of nums i.e 1+2=3)string i.e 2 so 32
console.log(1+5+2+"2") // o/p : 82 

console.log("1" + 2 + 2 + 3)  // o/p : 1223 //stirng + number + number + ... = string ; if 1st string, aferthat all considered as string
```
```
output:
12
12
12
32
82
1223
```

```javascript
console.log(true) // o/p: true
console.log(+true) // o/p: 1
console.log(+"") // o/p: 0  as ""/"  " means false 

//console.log(true+) // o/p: error

console.log(+"  k") // o/p: NaN as "  k"  is string, so it can't be incremented

console.log(false) // o/p: false
console.log(+false) // o/p: 0
//console.log(false+) // o/p: error
```
```
output:
true
1
0
NaN
false
0
```


