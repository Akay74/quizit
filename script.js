
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
        q:'What does HTML stand for?',
        options:[
            'A: Hyper Text Markup Language', 
            'B: High Tech Machine Learning', 
            'C: Hyper Transfer Markup Language', 
            'D: Href TypeDocument Markup Language'],
        answer: 0
    },
    {
        q:'What is the purpose of HTML in web development?',
        options:[
        'A: To create advanced animations',
        'B: To design complex databases',
        'C: To structure and present content on the web',
        'D: To provide backend server functionality.'
        ],
        answer: 2
    },
    {
        q:'How do you create a heading level 2 (h2) element in HTML?',
        options:[
            'A:  <heading2>Heading Text</heading2>',
            'B:  <h2>Heading Text</h2>',
            'C:  <h2>Text Heading</h2>',
            'D:  <h2>Text</h2>'
        ],
        answer: 1
    },
    {
        q:'Which HTML tag is used to create an ordered list?',
        options:[
            'A:  <ul>',
            'B:  <li>',
            'C:  <ol>',
            'D:  <dl>'
        ],
        answer: 2
    },
    {
        q:'How do you add a link to another website in HTML?',
        options:[
            'A:  <a source="https://www.example.com">Visit Example</a>',
            'B:  <link href="https://www.example.com">Visit Example</link>',
            'C:  <a href="https://www.example.com">Visit Example</a>',
            'D:  <url>https://www.example.com</url>'
        ],
        answer: 2
    },
    {
        q:'What HTML element is used to display an image?',
        options:[
            'A:  <img>',
            'B:  <picture>',
            'C:  <image>',
            'D:  <src>'
        ],
        answer: 0
    },
    {
        q:'What is the HTML tag for creating a line break?',
        options:[
            'A:  <br>',
            'B:  <lb>',
            'C:  <break>',
            'D:  <newline>'
        ],
        answer: 0
    },
    {
        q:'How can you create a comment in an HTML document?',
        options:[
            'A:  <!-- This is a comment -->',
            'B:  // This is a comment',
            'C:  # This is a comment',
            'D:  /* This is a comment */'
        ],
        answer: 0
    },
    {
        q:'Which HTML tag is used to define a paragraph?',
        options:[
            'A:  <paragraph>',
            'B:  <p>',
            'C:  <para>',
            'D:  <text>'
        ],
        answer: 1
    },
    {
        q:'What does the HTML  <em>  tag represent?',
        options:[
            'A: Embedded content',
            'B: Email address',
            'C: Emphasized text',
            'D: Error message'
        ],
        answer: 2
    },
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