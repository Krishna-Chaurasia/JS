```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: #212121;">
    <script >

//********Lexical Scoping ********** //
//Lexical Scoping : -inner functions can access the variables of its outer(parent) function
                  // - but inside parent fun. the inner fun.s will not share their varibale among them 
        
                  // function init(){
        //     let name = "Mozilla";
        //         function displayName(){
        //             console.log(name);
        //         }
        //         displayName();
        // }
        // init()

           function outer(){
            let username = "Krishna"
           }
          // console.log("TOO OUTER : ",username); //can't use username of outer() due to scope 

          function outer1(){
            let username = "Krishna"

            //console.log("outer1 accessing inner's var. inSecret : ",inSecret)

            function inner(){
               let inSecret = "abc";
                
                console.log("inner fun. accessing parent var. : " ,username); // will get access of usernamef of outer1()
                //console.log("inner  fun. accessing innerTwo's secret vari : ", secret)
            }


            function innerTwo(){
                let secret = "123";
                
                console.log("innerTwo fun. accessing parent var. : " ,username); // will get access of usernamef of outer1()
                //console.log("innerTwo  fun. accessing inners inSecret vari : ", inSecret)
            }
            inner()
            innerTwo()
           }
           outer1()
    </script>
</body>
</html>
```