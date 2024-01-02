const question=[
    {
        question:"What is the correct way to declare a variable in JavaScript?",
        answers:[
            {text:"var x;",correct:true},
            {text:"variable x;",correct:false},
            {text:"v x;",correct:false},
            {text:"let x;",correct:false},
        ]
    },
    {
        question:"Which of the following is a valid JavaScript data type?",
        answers:[
            {text:"integer",correct:false},
            {text:"boolean",correct:true},
            {text:"string[]",correct:false},
            {text:"undefined",correct:false},
        ]
    },
    {   
        question:"Which of the following is a valid JavaScript data type?",
        answers:[
            {text:"10",correct:false},
            {text:"55",correct:true},
            {text:"5 + '5'",correct:false},
            {text:"TypeError",correct:false},
        ]
    },
    {
        question:"How do you comment out multiple lines in JavaScript?",
        answers:[
            {text:"// This is a comment",correct:false},
            {text:"/* This is a comment */",correct:true},
            {text:"# This is a comment",correct:false},
            {text:"-- This is a comment",correct:false},
        ]
    },

    {
        question:"Which JavaScript method is used to remove the last item from an array?",
        answers:[
            {text:"pop()",correct:true},
            {text:"remove()",correct:false},
            {text:"deleteLast()",correct:false},
            {text:"splice()",correct:false},
        ]
    },
    {
        question:"What is the difference between null and undefined in JavaScript?",
        answers:[
            {text:"null represents an empty object, while undefined represents a variable that has not been declared.",correct:false},
            {text:"null represents a variable with an unknown value, while undefined represents the absence of a value.",correct:true},
            {text:"null represents a function that returns nothing, while undefined represents a function that is not yet defined.",correct:false},
            {text:"There is no difference; null and undefined can be used interchangeably in all cases.",correct:false},
        ]
    },
    {
        question:"How can you prevent a JavaScript function from executing multiple times when triggered multiple times?",
        answers:[
            {text:"Use setInterval()",correct:false},
            {text:"Use setTimeout()",correct:false},
            {text:"Use a closure",correct:false},
            {text:"Use debouncing",correct:true},
        ]
    },
    {
        question:"Which of the following is not a valid way to declare a function in JavaScript?",
        answers:[
            {text:"function myFunction() {}",correct:false},
            {text:"var myFunction = function() {}",correct:false},
            {text:"const myFunction = () => {}",correct:false},
            {text:"def myFunction() {}",correct:true},
        ]
    },
    {
        question:"What is the purpose of the localStorage object in JavaScript?",
        answers:[
            {text:"To store data locally in the browser",correct:true},
            {text:"To make API requests to a remote server",correct:false},
            {text:"To access a remote database",correct:false},
            {text:"To create local functions",correct:false},
        ]
    },
    {
        question:"How do you check if a variable is of type function in JavaScript?",
        answers:[
            {text:"typeof variable === func",correct:false},
            {text:"variable instanceof Function",correct:false},
            {text:"typeof variable === function",correct:true},
            {text:"variable isFunction",correct:false},
        ]
    },
    {
        question:"What is the purpose of the JSON.parse() method in JavaScript?",
        answers:[
            {text:"To convert a JSON string into a JavaScript object",correct:true},
            {text:"To convert a JavaScript object into a JSON string",correct:false},
            {text:" To parse HTML documents",correct:false},
            {text:"To calculate mathematical expressions",correct:false},
        ]
    },
    {
        question:"What is the value of NaN in JavaScript when compared using the === operator?",
        answers:[
            {text:"0",correct:false},
            {text:"null",correct:false},
            {text:"false",correct:false},
            {text:" Itself",correct:true},
        ]
    },
    {
        question:"Which keyword is used to exit a loop prematurely in JavaScript?",
        answers:[
            {text:"next",correct:false},
            {text:"break",correct:true},
            {text:"continue",correct:false},
            {text:"return",correct:false},
        ]
    },
    {
        question:"In JavaScript, what is a Promise used for?",
        answers:[
            {text:"To declare a variable",correct:false},
            {text:" To represent an asynchronous operation and its result or failure",correct:true},
            {text:"To store data locally in the browser",correct:false},
            {text:"To define a class constructor ",correct:false},
            
        ]
    },
    {
        question:"What is the purpose of the map() function in JavaScript?",
        answers:[
            {text:"To create a new array with modified elements",correct:true},
            {text:"To remove elements from an array",correct:false},
            {text:"To check if an array is empty",correct:false},
            {text:"To find the maximum value in an array",correct:false},
            
        ]
    },
    {
        question:"What is the concept of hoisting in JavaScript?",
        answers:[
            {text:" Moving a function to the end of a script file",correct:false},
            {text:"The process of linking external scripts",correct:false},
            {text:" Variables and function declarations are moved to the top of their containing scope during compilation",correct:true},
            {text:" Variables and function declarations are moved to the top of their containing scope during compilation",correct:false},
            
        ]
    },
    {
        question:"What is the purpose of the await keyword in asynchronous JavaScript code?",
        answers:[
            {text:"To terminate the program",correct:false},
            {text:"To make a function asynchronous ",correct:false},
            {text:" To pause execution until a promise is resolved",correct:true},
            {text:" To declare a variable",correct:false},
            
        ]
    },
    {
        question:"",
        answers:[
            {text:"To reduce the array size by removing elements",correct:false},
            {text:"To add elements to the end of an array",correct:false},
            {text:"To apply a function against an accumulator and each element in the array",correct:false},
            {text:"To apply a function against an accumulator and each element in the array",correct:false},
           
        ]
    },
    {
        question:"In JavaScript, what is the purpose of the reduce() method for arrays?",
        answers:[
            {text:"To bind two variables together",correct:false},
            {text:"To create a shallow copy of an object",correct:false},
            {text:"To explicitly set the value of this for a function",correct:true},
            {text:"To concatenate two strings",correct:false},
            
        ]
    },
    {
        question:"Which of the following is a built-in JavaScript method for sorting an array in place?",
        answers:[
            {text:"sortArray()",correct:false},
            {text:"sort()",correct:false},
            {text:"orderArray()",correct:true},
            {text:"arraySort()",correct:false},

        ]
    },

]

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next"
    showQuestions();
}


function showQuestions(){
    restart();
    let currentQuestion=question[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+ ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function restart(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block"; 
}

function handleNextButton(){
 currentQuestionIndex++;
 if(currentQuestionIndex<question.length){
    showQuestions();
 }else{
    showScore();
 }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton(); // Add parentheses to call the function
    } else {
        startQuiz();
    }
});


function showScore(){
    restart();
    questionElement.innerHTML=`You Scored ${score} out of ${question.length}`;
    nextButton.innerText="Play Again";
    nextButton.style.display="block";
}


startQuiz();