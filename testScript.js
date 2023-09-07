var options = document.querySelector(".options").children;
var answerTrackerContainer = document.querySelector(".answers-tracker");
var questionNumberSpan = document.querySelector(".question-num-value");
var totalQuestionSpan = document.querySelector(".total-question");
var correctAnswerSpan = document.querySelector(".correct-answers");
var totalQuestionSpan2 = document.querySelector(".total-question2");
var question = document.querySelector(".question");
var op1 = document.querySelector(".option1");
var op2 = document.querySelector(".option2");
var op3 = document.querySelector(".option3");
var op4 = document.querySelector(".option4");
var quizContainer = document.querySelector(".start-quiz");
var quizOverContainer = document.querySelector(".quiz-over");
var questionIndex;
var index = 0;
var myArray = [];
var myArr = [];
var score = 0;

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
            'A:  &lt;heading2&gt;Heading Text&lt;/heading2&gt;',
            'B:  &lt;h2&gt;Heading Text&lt;/h2&gt;',
            'C:  &lt;h2&gt;Text Heading&lt;/h2&gt;',
            'D:  &lt;h2&gt;Text&lt;/h2&gt;'
        ],
        answer: 1
    },
    {
        q:'Which HTML tag is used to create an ordered list?',
        options:[
            'A:  &lt;ul&gt;',
            'B:  &lt;li&gt;',
            'C:  &lt;ol&gt;',
            'D:  &lt;dl&gt;'
        ],
        answer: 2
    },
    {
        q:'How do you add a link to another website in HTML?',
        options:[
            'A:  &lt;a source="https://www.example.com"&gt;Visit Example&lt;/a&gt;',
            'B:  &lt;link href="https://www.example.com"&gt;Visit Example&lt;/link&gt;',
            'C:  &lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;',
            'D:  &lt;url&gt;https://www.example.com&lt;/url&gt;'
        ],
        answer: 2
    },
    {
        q:'What HTML element is used to display an image?',
        options:[
            'A:  &lt;img&gt;',
            'B:  &lt;picture&gt;',
            'C:  &lt;image&gt;',
            'D:  &lt;src&gt;'
        ],
        answer: 0
    },
    {
        q:'What is the HTML tag for creating a line break?',
        options:[
            'A:  &lt;br&gt;',
            'B:  &lt;lb&gt;',
            'C:  &lt;break&gt;',
            'D:  &lt;newline&gt;'
        ],
        answer: 0
    },
    {
        q:'How can you create a comment in an HTML document?',
        options:[
            'A:  &lt;!-- This is a comment --&gt;',
            'B:  // This is a comment',
            'C:  # This is a comment',
            'D:  /* This is a comment */'
        ],
        answer: 0
    },
    {
        q:'Which HTML tag is used to define a paragraph?',
        options:[
            'A:  &lt;paragraph&gt;',
            'B:  &lt;p&gt;',
            'C:  &lt;para&gt;',
            'D:  &lt;text&gt;'
        ],
        answer: 1
    },
    {
        q:'What does the HTML &lt;em&gt; tag represent?',
        options:[
            'A: Embedded content',
            'B: Email address',
            'C: Emphasized text',
            'D: Error message'
        ],
        answer: 2
    },
]

totalQuestionSpan.innerHTML = questions.length;

function load() {
  questionNumberSpan.innerHTML = index + 1;
  question.innerHTML = questions[questionIndex].q;
  op1.innerHTML = questions[questionIndex].options[0];
  op2.innerHTML = questions[questionIndex].options[1];
  op3.innerHTML = questions[questionIndex].options[2];
  op4.innerHTML = questions[questionIndex].options[3];
  index++;
}

function check(element) {
  if (element.id == questions[questionIndex].answer) {
    element.classList.add("correct");
    // updateAnswerTracker("correct");
    score++;
  } else {
    element.classList.add("wrong");
    // updateAnswerTracker("wrong");
  }

  disabledOptions();
}

function disabledOptions() {
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add("disabled");
    if (options[i].id == questions[questionIndex].answer) {
      options[i].classList.add("correct");
    }
  }
}

function enableOptions() {
  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("disabled", "correct", "wrong");
  }
}

function validateState() {
  if (!options[0].classList.contains("disabled")) {
    alert("Please Select one option");
  } else {
    enableOptions();
    randomQuestion();
  }
}

function next() {
  validateState();
}

function randomQuestion() {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitDuplicate = 0;
  if (index == questions.length) {
    console.log(index);
    quizOver();
  } else {
    if (myArray.length > 0) {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == randomNumber) {
          hitDuplicate = 1;
          break;
        }
      }
      if (hitDuplicate == 1) {
        randomQuestion();
      } else {
        questionIndex = randomNumber;
        load();
        myArr.push(questionIndex);
        console.log(myArr);
      }
    }
    if (myArray.length == 0) {
      questionIndex = randomNumber;
      load();
      myArr.push(questionIndex);
      console.log(myArr);
    }

    myArray.push(randomNumber);
  }
}

function answerTracker() {
  for (let i = 0; i < questions.length; i++) {
    const div = document.createElement("div");
    answerTrackerContainer.appendChild(div);
  }
}

function updateAnswerTracker(className) {
  answerTrackerContainer.children[index - 1].classList.add(className);
}

function quizOver() {
  quizOverContainer.style.display = "flex";
  correctAnswerSpan.innerHTML = score;
  totalQuestionSpan2.innerHTML = questions.length;
}

function startQuiz() {
  quizContainer.style.display = "none";
  randomQuestion();
}

function tryAgain() {
  window.location.reload();
}

// Add an event listener to the "Next" button
document.querySelector(".next-btn").addEventListener("click", next);
