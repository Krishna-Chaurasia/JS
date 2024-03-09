// for loop 
/* 
syntax of for loop ::  it is a scope as it has {   }

for(initialization; condition; increment){
    statements
}

*/

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
