```javascript
const form =document.querySelector("form");
//this usecase will give you empty value in form
//const height = parseInt(document.querySelector('#height').value) // we will value in sting, so we need to convert it into number
  

form.addEventListener('submit', function(e){
    e.preventDefault(); // to prevent default behaviour e.g to stop form to get submitted on server
    const height = parseFloat(document.querySelector('#height').value); // we will value in sting, so we need to convert it into number
    const weight = parseFloat(document.querySelector('#weight').value); // we will value in sting, so we need to convert it into number
    const results = document.querySelector('#results');

    //isNaN() method returns true if a value is Not-a-Number.
    if(height === '' || height <0 || isNaN(height))
    {
        results.innerHTML = `please enter a valid height ${height}`;
    }
    else if(weight === '' || weight <0 || isNaN(weight))
    {
        results.innerHTML = `please enter a valid weight ${weight}`;
    }
    else
    {
      const bmi =   (weight/(height*height)).toFixed(2);
    
    results.innerHTML = `<span> your BMI is ${bmi}</span>`;
    }
    
})
```