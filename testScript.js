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

    {
        question: 'What does CSS stand for?',

        options: [
            'A: Computer Style System',
            'B: Central System Software',
            'C: Cascading Style Sheets',
            'D: Colorful Styling Scheme'
        ],
        answer: 2
    },

    {
        question: 'How do you apply inline CSS to change the color of text to blue?',

        options: [
            'A: <p style="text-color: blue;">Blue Text</p>',
            'B: <p style="blue: text;">Blue Text</p>',
            'C: <p style="color: blue;">Blue Text</p>',
            'D: <p style="style: blue;">Blue Text</p>'
        ],
        answer: 2
    },
    {
        question: 'Which CSS property is used to change the font size of an element?',

        options: [
            'A: font-style',
            'B: text-size',
            'C: font-size',
            'D: text-style'
        ],
        answer: 2
    },
    {
        question:'How do you select an HTML element with the ID "header" in CSS?',

        options:[
            'A: .header',
            'B: element#header',
            'C: #header',
            'D: header'
        ],
        answer: 2
    },
    {
        question:'What is the purpose of CSS in web development?',

        options:[
            'A: To create interactive web applications',
            'B: To manage server-side operations',
            'C: To structure and present content',
            'D: To manage databases'
        ],
        answer: 2
    },
    {
        question: 'Which CSS property is used to control the spacing between letters in text?',

        options: [
            'A: word-spacing',
            'B: text-spacing',
            'C: letter-spacing',
            'D: line-spacing'
        ],
        answer: 2
    },
    {
        question: 'How do you give an element a border in CSS?',

        options: [
            'A: border: 1px solid black;',
            'B: element-border: 1px solid black;',
            'C: border-style: 1px solid black;',
            'D: border-width: 1px solid black;'
        ],
        answer: 0
    },
    {
        question: 'What is the difference between margin and padding in CSS?',

        options:[
            'A: Margin is the space inside an element, while padding is the space outside an element\'s border',
            'B: Margin is the space outside an element, while padding is the space inside an element\'s border',
            'C: Margin is the width of an element, while padding is the height of an element',
            'D: Margin is the space between two elements, while padding is the space within a single element'
        ],
        answer: 1
    },
    {
        question: 'How can you apply a background color to an element in CSS?',

        options:[
            'A: bg-color',
            'B: color-background',
            'C: background-color',
            'D: bg-style'
        ],
        answer: 2
    },
    {
        question: 'What is a CSS class selector used for?',

        options:[
            'A: To select the first element on a page',
            'B: To select the last element on a page',
            'C: To select and style multiple elements with the same class',
            'D: To select and style a specific HTML element'
        ],
        answer: 2
    },

    {
        question:'What is WordPress primarily used for?',
        options:[
            'A: E-commerce',
            'B: Blogging',
            'C: Social Media',
            'D: Video Editing'
        ],
        answer: 1
    },

    {
        question: 'Which of the following types of content can you create in WordPress?',
    options: [
            'A: Only blog posts',
            'B: Only pages',
            'C: Blog posts, pages, and more',
            'D: Only images'
        ],
    answer: 2
    },
    {
        question: 'What is the WordPress Dashboard?',
    options: [
            'A: A physical screen',
            'B: The admin control panel',
            'C: A WordPress plugin',
            'D: A blog post template',
        ],
    answer: 1
    },
    {
        question: 'What is a WordPress theme?',
        options:[
            'A: A type of blog post',
            'B: A template that defines a website\'s design',
            'C: A social media plugin',
            'D: A website hosting service'
        ],

    answer: 1
    },
    {
        question: 'What is a WordPress plugin?',
        options: [
            'A: A type of theme',
            'B: A page on your website',
            'C: An external website',
            'D: An add-on that extends website functionality',
        ],
    answer: 3
    },
    {
        question: 'Which of the following is a common way to add new content to your WordPress website?',
    options: [
            'A: Use a wrench',
            'B: Hire a developer',
            'C: Use the WordPress editor',
            'D: Call customer support'
        ],
    answer: 2
    },
    {
        question: 'What is the purpose of the Media Library in WordPress?',
    options: [
            'A: To display ads',
            'B: To store and manage media files like images and videos',
            'C: To list blog categories',
            'D: To track website visitors',
        ],
    answer: 1
    },
    {
        question:'How can you change the appearance of your WordPress site using themes?',
        options:[
            'A: By changing the website\'s domain',
            'B: By customizing the website\'s design and layout',
            'C: By updating the website\'s hosting server',
            'D: By deleting the website\'s content'
        ],
        answer: 2
    },
    {
        question:'What does SEO stand for in the context of WordPress?',
        options:[
            'A: Social Engagement Optimization',
            'B: Search Engine Optimization',
            'C: Secure Email Operations',
            'D: Site Editing Options'
        ],
        answer: 1
    },
    {
        question: 'What is the purpose of a permalink in WordPress?',
        options:[
            'A: To share on social media',
            'B: To save drafts',
            'C: To customize your website\'s fonts',
            'D: To create a permanent URL structure for your posts and pages'
        ],
        answer: 3
    },

    {
        question: 'What is a WordPress permalink structure?',
        options: [
            'A: A type of WordPress theme',
            'B: The default URL format for your posts and pages',
            'C: A type of SEO plugin',
            'D: The website\'s footer design',
        ],
        answer: 1
    },
    {
        question:'What is the purpose of WordPress permalinks?',
           options:[
            'A: To create blog posts',
            'B: To set up a website hosting plan',
            'C: To create custom URLs for your site\'s pages and posts',
            'D: To manage user accounts',
        ],

    answer: 2
    },
    {
        question:'What is a WordPress child theme?',
       options: [
            'A: A theme for children\'s websites',
            'B: A theme for gaming websites',
            'C: A theme that inherits the styles and functions of another theme',
            'D: A theme for senior citizens'
        ],
        answer: 2
    }
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
