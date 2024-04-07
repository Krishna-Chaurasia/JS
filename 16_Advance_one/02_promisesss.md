```
<!-- 
     - concept of .then and .catch are formed from promises
     - also we get internal tool named fetch from promises 
     - fetch is used instead of XMLHttpRequest()
Proimses: 
    - The promise object represents the eventual completion(or failure) of 
       an asynchronous operation and its resulting value 
    - Operation like Cryptocraphy, Network, Files, database request etc. are asynchronous.
Asynchronous: 
     -tasks will not be executed in sequence wise. 
     - for e.g I promise to do study for 6 hr but I have taken break for several time in between 6 hr of study.
         so, it may take upto 9 hr(future time) to complete 6hr of study or failure may occur if i didn't study.
    - so 2 cases : completion(many task may happen in beteen completion) and failure
Note :  -  so, we can use 2 options in this case : 
     - 1) async a wait  : which means wait until work has not finished 
     - 2) promises : mostly used in modern world. 
         - when we use promise then it completes in future.
 -->

 <!-- 
    Promises : - it is an object
       - There are three states of promises.
            1) pending: Intial state, neither fulfilled nor rejected 
            2) fulfilled : Meaning that the operation was completed sussessfully
            3) rejected: Meaning that the operation failed
  -->
```