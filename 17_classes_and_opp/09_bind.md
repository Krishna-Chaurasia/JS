```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
</head>
<body>
    <button>Button1 Clicked(it is not bind() so won't have access to class react{ })</button>
    <br>
    <!-- onclick will not work -->
     <br>
    <button id="button2">Button 2 Clicked(it is bind() so, has access to class react{ } )</button> 



</body>
<script>
    class React {
        constructor(){
            this.library = "React"
            this.server = "https://localhost:300"

            //requirement : when this page loads, a object must be created of React automaticlly
                        // and get reference of button and method tells form submitted

          //Ans 1:
           document
                .querySelector('button')
                .addEventListener('click',this.handleClick) //need to give this. for the reference of handleclick function 
                                                            //and don't use handleclick() which means calling function here
                             //here 'button' will not get access to all members of its class React because it is not bind()
        
        //Ans2
        document
                .querySelector('#button2')
                .addEventListener('click', this.handleClick.bind(this)); //here 'button2' will get access to all 
                                                  //members/mehods/variables/this of its class React due to bind(this)
        }
               
        handleClick(){
            console.log(`button clicked`)
            console.log(this) // will contain button reference
            console.log(this.server)
        }
    }

    const app = new React();
</script>
</html>
```