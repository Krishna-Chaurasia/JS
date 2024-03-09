/* 
Scope: denoted by {  }
    anything in this curly bracket is called as scope for e.g function a(){  }
    and if(){  } , elseif(){ }

    but with object it is not called as scope e.g const arr = {   }
*/


c= 89  // will not change if() condition's c's value  as declared before
d= 77   // will not change if() condition's d's value as declared before

if(true){   // this will execute 100% because of 'true'
    let a = 10
    const b = 20
    var c = 30
    d=40   // automatically considered as var

}


// d=99  // will override d's value as declared afterwards
// c=45  // will override c's value as declared afterwards


 //const d = 999  //o/p: error:  d declared above i.e before if()
 //let c = 709  //o/p: error: c declared above i.e before if()
 

//  const a = 767  //o/p :  no error, because declaring outside the scope of if() condition
//  let b = 6666  //o/p :  no error, because declaring outside the scope of if() condition


//console.log(a) // a will not print because it is not declared outside/globally but it is declared within if(true) condition with let a = 10

//console.log(b) // b will not print because it is not declared outside/globally but is declared within if(true) condition with const b = 20

console.log(c) // c will print because it is declared inside/within if() condition with var c =30 due to 'var' it happens

console.log(d) // d will print because its type is not defined inside true() statement so it considered itself as 'var'

// ********* Nested Scope *********
// it means scope inside scode or function inside another function

console.log("\nNested Scope\n")

function one(){  // parent function : it can't access its child function's variable/data
    const username = "Krishna"

    function two(){ // child function : it can access its parent function's variable/data
        
        const website = "youtube"
        console.log(username) //No error, because child function can access its parent function data

    }
  
//console.log(website) // it gives error because parent function can't access its child function data

two()

}

// calling function one() 

one()

// *** Above nested scope's property applies to nested if-else condition

//++++++++++ Interesting ++++++++++++
console.log("\naccessing function before declaring it\n")

// *******1st way of declaring function 

console.log(addone(5)) // accessing function before declaring it, this will not give error
                      // because declared function is not stored in any varible
function addone(num){ 
    return num+1
}

// ******** 2nd way of declaring function

//console.log(addtwo(5)) // accessing function before declaring it, this will give error
                      // because declared function is stored in any varible
const addtwo = function (num){ 
    return num+3
}

console.log(addtwo(5)) // accessing function after declaring it, this will not give error
                      // because declared function is stored in any varible or not, does not effect














