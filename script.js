
var options=document.querySelector(".options").children;
var answerTrackerContainer=document.querySelector(".answers-tracker");
var questionNumberSpan=document.querySelector(".question-num-value");
var totalQuestionSpan=document.querySelector(".total-question");
var correctAnswerSpan=document.querySelector(".correct-answers");
var totalQuestionSpan2=document.querySelector(".total-question2");
var question=document.querySelector(".question");
var op1=document.querySelector(".option1");
var op2=document.querySelector(".option2");
var op3=document.querySelector(".option3");
var questionIndex;
var index=0;
var myArray=[];
var myArr=[];
var score=0;


var questions=[
    {
        q:'Which of these is not an ocean?',
        options:['Atlantic ocean', 'Oceania', 'Indian ocean'],
        answer: 1
    },
    {
        q:'Which of these is not a programming language?',
        options:['JavaScript', 'CSS', 'Ruby'],
        answer: 1
    },
    {
        q:'What is the capital city of Spain?',
        options:['Madrid', 'Barcelona', 'Maldives'],
        answer: 0
    },
    {
        q:'Who played Neo in The Matrix?',
        options:['Jason Statham', 'Chris Hemsworth', 'Keanu Reeves'],
        answer: 2
    },
    {
        q:'What year was the Titanic built?',
        options:['1911', '1920', '1924'],
        answer: 0
    }
]

totalQuestionSpan.innerHTML=questions.length;
function load(){
         questionNumberSpan.innerHTML=index+1;
         question.innerHTML=questions[questionIndex].q;
         op1.innerHTML=questions[questionIndex].options[0];
         op2.innerHTML=questions[questionIndex].options[1];
         op3.innerHTML=questions[questionIndex].options[2];
         index++;
}

function check(element){
   if(element.id==questions[questionIndex].answer){
      element.classList.add("correct");
      updateAnswerTracker("correct");
      score++;
   }
   else{
       element.classList.add("wrong");
       updateAnswerTracker("wrong");
   }

   disabledOptions()
}
function disabledOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer) {
            options[i].classList.add("correct");   
        }
    }
}
function enableOptions(){
    for(let i=0; i<options.length; i++) {
        options[i].classList.remove("disabled","correct","wrong");
    }
}

   function ValidityState(){
       if(!options[0].classList.contains("disabled")) {
       alert("Please Select one option")
       }
       else{
        enableOptions();
        randomQuestion();
       }
   }

   function next(){
       ValidityState();
   }

function randomQuestion(){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;  
    if(index==questions.length) {
        quizOver();
    }
    else {
        if(myArray.length>0){
            for(let i=0; i<myArray.length; i++) {
                if(myArray[i]==randomNumber){
                    hitDuplicate=1;
                    break;
                }
            }
            if(hitDuplicate==1){
                randomQuestion();
            }
            else{
                questionIndex=randomNumber;
                load();
                myArr.push(questionIndex);
            }
        }
        if(myArray.length==0){
        questionIndex=randomNumber;
        load();
        myArr.push(questionIndex);
        }
        
        myArray.push(randomNumber);
    }
}
function answerTracker() {
    for(let i=0; i<questions.length; i++) {
        const div=document.createElement("div");
        answerTrackerContainer.appendChild(div);
    }
}
function updateAnswerTracker(className) {
  answerTrackerContainer.children[index-1].classList.add(className);
}
function quizOver(){
  document.querySelector(".quiz-over").classList.add("show");
  correctAnswerSpan.innerHTML=score;
  totalQuestionSpan2.innerHTML=questions.length;
}
function tryAgain(){
    window.location.reload();
}
 window.onload=function(){
     randomQuestion();
     this.answerTracker();
}