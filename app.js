//DOM
const scoreDisplay = document.querySelector('#currentScore');
const queDisplay = document.querySelector('h1');
const userInput = document.querySelector('#userAnswer');
const submitBtn = document.querySelector('button');
const form = document.querySelector('form');
//Variables
let scoreCount = 0;
let qNumber1 = 0;
let qNumber2 = 0;
let qAnswer = 0;
//Function
const randomFunction=()=>{
    return Math.floor(Math.random()*10) + 1;
}
const multiplyFunction=(x,y)=>{
    return x*y;
}

//
const queGenerator = ()=>{
    qNumber1 = randomFunction();
    qNumber2 = randomFunction();
    qAnswer = multiplyFunction(qNumber1, qNumber2);
    queDisplay.innerText = `What is ${qNumber1} multiply by ${qNumber2}?`;
    console.log(qAnswer)
}
const retrieveAnswer = (e) =>{
    e.preventDefault();
    let userAnswer = userInput.value;
    if(userAnswer == qAnswer){
        scoreCount++;
        scoreDisplay.innerText = scoreCount;
    }else{
        scoreCount--;
        scoreDisplay.innerText = scoreCount;
    }
    console.log(userAnswer)
}
form.addEventListener('submit', retrieveAnswer);
form.addEventListener('submit', queGenerator);
form.addEventListener('submit', function(){userInput.value=''})
