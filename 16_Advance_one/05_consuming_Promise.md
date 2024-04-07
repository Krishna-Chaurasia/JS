```javascript
/*

// ****** consuming other's promise *****
console.log("\n consuming other's promise \n");
async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users') // consuming promise and waiting for it to store in response
    // data coming and being stored in response are strings
    
    //console.log(response);
    const data = await response.json(); // converting string data of response into json format i.e object format
    console.log(data) // array of objects

   } catch (error) {
     console.log("E: ",error);
   }
}
getAllUsers();

*/

// ******* writing above same code in another mehod *****

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(responseAllData){
return responseAllData.json();//since we have returned responseAllData.json(), 
                              //so there should be one more than after this to handle it  
})
.then((dataAllData) => {
    console.log(dataAllData);
})
.catch( (errorAllData) => {
    console.log("E: ",errorAllData);
})




```