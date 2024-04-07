```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Events</title>
</head>

<body style="background-color: #414141; color: aliceblue;">
    <h2> Amazing Images </h2>
    <div>
        <ul id="images">
            <li><img width="200px" id="photoshop"
                    src="https://images.pexels.com/photos/20367982/pexels-photo-20367982/free-photo-of-a-small-cabin-in-the-middle-of-a-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="photoshop"></li>
            <li><img width="200px" id="photoshop"
                    src="https://images.pexels.com/photos/2423157/pexels-photo-2423157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="photoshop"></li>
            <li><img width="200px" id="single_kitten"
                    src="https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="photoshop"></li>
            <li><img width="200px" id="kittens"
                    src="https://images.pexels.com/photos/8194266/pexels-photo-8194266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="photoshop"></li>
            <li><img width="200px" id="cart"
                    src="https://images.pexels.com/photos/1583571/pexels-photo-1583571.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="photoshop"></li>
            <li><img width="200px" id="brick"
                    src="https://images.pexels.com/photos/4851642/pexels-photo-4851642.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="photoshop"></li>
            <li><img width="200px" id="buff"
                    src="https://images.pexels.com/photos/5459140/pexels-photo-5459140.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="photoshop"></li>

            <li><img width="200px" id="harvest"
                    src="https://media.istockphoto.com/id/1446460244/photo/young-indian-woman-cutting-a-wheat-india.jpg?b=1&s=612x612&w=0&k=20&c=5ytQ4vnrWHzLoO0CdJOoqA9N01_XNZcKGR6kkD_OIgs="
                    alt="photoshop"></li>

            <li><img width="200px" id="cattle"
                    src="https://images.pexels.com/photos/5205221/pexels-photo-5205221.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="photoshop"></li>
            <!-- id="cattle" ; onclick function is applied using js script -->

            <li><img width="200px" id="train"
                    src="https://images.pexels.com/photos/4805704/pexels-photo-4805704.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="photoshop" onclick="alert('mumbai clicked in HTML attribute')"></li>
          <!--  onclick="alert('hello')" ; in above li tag will show alert but this approach is not recommended
           as it is not feasible for big projects-->

           
            <li><a style="color: aliceblue;" href="https://www.google.com" id="google">Google</a></li>

        </ul>
    </div>
</body>
<script>
    //below method is not much good 
    document.getElementById('cattle').onclick = function(){
        alert("cattle clicked using onclick");
    }
    /*
    addEventListener():

    -below method is best i.e addEventListener; it can listen events of keyboard, mouse, draga and drop etc.
    and the event which we are going to listen should be in string format e.g 'click'.
    -there is thee parameter in addEventListener function which is 'event', 'function', 'true' or 'false'
    -if we want to listen to multiple events then we can give multiple events in the array e.g ['click', 'mouseover']
    -e.g document.getElementById('cattle').addEventListener('click', function(){}, true/false) // false is default
    -we get event as an object in the function e.g 'e'
    
    */
    document.getElementById('harvest').addEventListener('click', function(){
        alert('harvest clicked using addEventListener');
    })
    
    // attachEvent() is also used previously
    //jQuery uses 'on' event listener

    // below using addEvenListener()'s object in the function with event name 'e'
    document.getElementById('buff').addEventListener('click', function(e){
        alert("open console and see the event object");;
        console.log(e); // check in console after clicking on the image
        // we get as many as events in the object in addEventListener e.g e.type, e.target, e.currentTarget, e.timeStamp, e.isTrusted,  e,preventDefault, e,position(includes x and y coordinates), e.view, e.height, e.weight 
      
    }, false);

    // need to study about timestamp, type, defaultPrevented, target, currentTarget, position, view, height, weight, toElement, srcElement, clientX, clientY, offsetX, offsetY, screenX, screenY, pageX, pageY, ctrlKey, altKey, shiftKey, metaKey, button, keyCode, charCode

    //Now learn about Event propogation: inclused 3rd parameter of eventListener i.e false/true, here false is default also called as event bubbling and true is called as event capturing


    document.getElementById('brick').addEventListener('click', function(e){
        console.log("clicked brick"); // check in console after clicking on the image
        // we get as many as events in the object in addEventListener e.g e.type, e.target, e.currentTarget, e.timeStamp, e.isTrusted,  e,preventDefault, e,position(includes x and y coordinates), e.view, e.height, e.weight 
      
    }, false); 
 
    //*******

    document.getElementById('images').addEventListener('click', function(e){
        console.log("clicked inside the ul below(least priority) "); // check in console after clicking on the image
        // we get as many as events in the object in addEventListener e.g e.type, e.target, e.currentTarget, 
        //e.timeStamp, e.isTrusted,  e,preventDefault, e,position(includes x and y coordinates), e.view, e.height, e.weight 
      
 }, false);//when 3rd parameter is false then we can say it has least priority(check the conslole with false and true)

//or ********** apply true **********

//     document.getElementById('images').addEventListener('click', function(e){
//         console.log("clicked inside the ul above(1st priority)"); 
      
//   }, true); //when 3rd parameter is true then we can say it has 1st priority(check the conslole with false and true)


    document.getElementById('cart').addEventListener('click', function(e){
        console.log("clicked cattle-cart"); 
    }, true);//when 3rd parameter is true then we can say it has 1st priority(check the conslole with false and true)

    document.getElementById('kittens').addEventListener('click', function(e){
        e.stopPropagation();
        alert('kittens clicked and stopped the event propogation using e.stopPropagation(); , so event bubbling will not happen but event capturing will happen if we apply true in 3rd parameter of eventListener');
    })

    document.getElementById('single_kitten').addEventListener('click', function(e){
        e.stopImmediatePropagation(); 
        alert('singel kitten clicked and stopped the event propogation using e.stopImmediatePropagation(); , so event bubbling stoped but capturing will happen, so to stop capturing make 3rd parameter as false of image id which is parent id of single_kitten');
    });

    //*****applying preventDefault(); on google link to stop opening the link

    document.getElementById('google').addEventListener('click', function(e){
        alert('google clicked check console');
        console.log("clicked google");
        e.stopPropagation();
        e.preventDefault();
    },false)
</script>
</html>
```