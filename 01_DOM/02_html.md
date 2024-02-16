```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM 2 : Relations</title>

</head>
<body style="background-color: #212121; color: #fff;"> 
    <div class="parent">
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thrusday</div>
    </div>
</body>
<script>
    const parent = document.querySelector('.parent');
    // console.log(parent);
    // console.log(parent.children);
    // console.log(parent.children[1].innerText);//o/p: Tuesday

    // for (let i = 0; i < parent.children.length; i++) {
    //     console.log(parent.children[i].innerText);
    // }

    //parent.children[1].style.color = 'orange'; //will change color of Tuesday i.e 1st element
    
    // console.log(parent.firstElementChild) // 0th index element
    // console.log(parent.lastElementChild)  // lenght-1 index element

    const dayOne = document.querySelector('.day'); // assigne only 1st element among all having class with name 'day'
    // console.log(dayOne);
    // console.log(dayOne.parentElement); // will give dayOne's parent element/tag if exist
    // console.log(dayOne.nextElementSibling); // o/p Tuesday, after dayOne next element/tag given

    console.log("NODES: ", parent.childNodes) //will gives all nodes(it considers enter button, spaces, tags etc.)

    
</script>
</html>
```