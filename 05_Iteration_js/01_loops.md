// for loop 
/* 
syntax of for loop ::  it is a scope as it has {   }

for(initialization; condition; increment){
    statements
}

*/
```javascript
for (let index = 0; index < 5; index++) {   // double click on index, then keep press ctrl + D to select only index
      console.log(index);  
    
}

// ****** printing all tables ******

console.log("\ndisplaying all tables using nested loops : \n");

for (let i = 1; i <=10 ; i++){
     console.log(`outer loop value ${i}`);

     for (let j = 1; j  <=10; j++) {
        console.log(i + '*' + j + '=' + i*j)
        
     }
}

// break and continue

console.log("\n using break \n");

for (let index = 1; index <=20; index++) {
    if(index == 5){
         console.log(`Using Break Detected 5`);
         break  // noting will be execute when if condition is true, and we will be out of the loop 
    }
   console.log(` value of i is ${index}`)
    
}

console.log("\nusing continue \n");

for (let index = 1; index <=8; index++) {
    if(index == 5){
         console.log(`Using continue Detected 5`);
         continue // below codes will not be executed only once if condition is true,
                  // but we will be still in the loop
        }            
    console.log(`value of i is ${index}`)
    
}
```
```
output:
0
1
2
3
4

displaying all tables using nested loops :

outer loop value 1
1*1=1
1*2=2
1*3=3
1*4=4
1*5=5
1*6=6
1*7=7
1*8=8
1*9=9
1*10=10
outer loop value 2
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
2*6=12
2*7=14
2*8=16
2*9=18
2*10=20
outer loop value 3
3*1=3
3*2=6
3*3=9
3*4=12
3*5=15
3*6=18
3*7=21
3*8=24
3*9=27
3*10=30
outer loop value 4
4*1=4
4*2=8
4*3=12
4*4=16
4*5=20
4*6=24
4*7=28
4*8=32
4*9=36
4*10=40
outer loop value 5
5*1=5
5*2=10
5*3=15
5*4=20
5*5=25
5*6=30
5*7=35
5*8=40
5*9=45
5*10=50
outer loop value 6
6*1=6
6*2=12
6*3=18
6*4=24
6*5=30
6*6=36
6*7=42
6*8=48
6*9=54
6*10=60
outer loop value 7
7*1=7
7*2=14
7*3=21
7*4=28
7*5=35
7*6=42
7*7=49
7*8=56
7*9=63
7*10=70
outer loop value 8
8*1=8
8*2=16
8*3=24
8*4=32
8*5=40
8*6=48
8*7=56
8*8=64
8*9=72
8*10=80
outer loop value 9
9*1=9
9*2=18
9*3=27
9*4=36
9*5=45
9*6=54
9*7=63
9*8=72
9*9=81
9*10=90
outer loop value 10
10*1=10
10*2=20
10*3=30
10*4=40
10*5=50
10*6=60
10*7=70
10*8=80
10*9=90
10*10=100

 using break

 value of i is 1
 value of i is 2
 value of i is 3
 value of i is 4
Using Break Detected 5

using continue

value of i is 1
value of i is 2
value of i is 3
value of i is 4
Using continue Detected 5
value of i is 6
value of i is 7
value of i is 8
```