let randomNumber = parseInt(Math.random()*100 + 1); // it can give 0(.00005), so add + 1
//console.log(randomNumber);
const submit = document.querySelector('#subt'); //will apply evenListener to submit button

const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let numGuess = 1;
let prevGuess = [];
let playGame = true;

if(playGame){
    //In addEventListener,, we get an event 'e' in the function()
    submit.addEventListener('click', function(e){ 
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess <1){
        alert ('Please enter a number more than 1');
    }
    else if(guess > 100){
        alert('Please enter a number less than 100');
    }
    else {
        prevGuess.push(guess);
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Sorry, you lost. Game over! \n The number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`Good job! You guessed the number in ${numGuess-1} guesses!`);
        endGame();  
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Too High`);
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too low`);
    }
}

function displayGuess(guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;
    
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled',''); // setAttribute('name of attribute', 'value of attribute') i.e key value pair
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame"> Start New Game </h2>`;
    startOver.appendChild(p); // now p tag is appended to startOver
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
        newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}

