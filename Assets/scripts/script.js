//Start Button
var startBtn = document.querySelector("#start-btn");
console.log(startBtn);

//Time Element Variable
var timeEl = document.querySelector(".time");

//Quiz Questions Variables
var questionDisplay = document.getElementById("question");
var questionBlock = document.getElementById("question-block");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var answerBlock = document.getElementById("answerBlock");

//Countdown Variables
var secondsLeft = 101;
var startMessage = document.getElementById("start-message");

//Questions Array
var quizQuests = [
  {
    question: "What is an object in Javascript?",
    answers: {
      A:
        "An object is a collection of properties, and a property is an association between a name (or key) and a value.",
      B:
        "A code snippet that can be called by other code or by itself, or a variable that refers to the function.",
      C: "A container for storing data values.",
    },
    correctAnswer: "A",
  },
  {
    question: "What is a function?",
    answers: {
      A: "A block of code designed to perform a particular task.",
      B: "An object.",
      C: "A and B.",
    },
    correctAnswer: "C",
  },
  {
    question: "Which of the following is considered an Operator?",
    answers: {
      A: "$",
      B: "%=",
      C: "##",
    },
    correctAnswer: "C",
  },
  {
    question: "What is the purpose of console.log()?",
    answers: {
      A: "Script Debugging",
      B: "Loops for conditions",
      C: "##",
    },
    correctAnswer: "B",
  },
  {
    question: "Which of the following is not a JS data type?",
    answers: {
      A: "Method",
      B: "String",
      C: "Undefined",
    },
    correctAnswer: "A",
  },
  {
    question: "What does it mean when a variable has a local scope?",
    answers: {
      A: "The variable is nested inside a function.",
      B: "A variable sits outside of a function.",
      C: "It refers to local storage.",
    },
    correctAnswer: "A",
  },
  {
    question: "Which of the following is considered an Operator?",
    answers: {
      A: "$",
      B: "%=",
      C: "##",
    },
    correctAnswer: "C",
  },
  {
    question: "How do you write a single-line comment in Javascript",
    answers: {
      A: "//",
      B: "*/",
      C: "||",
    },
    correctAnswer: "C",
  },
  {
    question: "Which of the following is a strict equality operator?",
    answers: {
      A: "===",
      B: "==",
      C: "+=",
    },
    correctAnswer: "A",
  },
  {
    question:
      "Which of the following is will be contained in a pop-up box on an HTML page?",
    answers: {
      A: "While",
      B: "Confirm",
      C: "Const",
    },
    correctAnswer: "B",
  },
];
console.log(quizQuests);
var index = 0;

//Add Event Listener for Question Block
answerBlock.addEventListener("click", function (event) {
  var clickValue = event.target.attributes[0].value;
  var answer = quizQuests[index].correctAnswer;
  if (clickValue === answer) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }
  index++;
  quizCycle();
});

//Hides Previous Div with newly populated Div
startBtn.addEventListener("click", function (event) {
  startMessage.setAttribute("style", "display:none");
  questionBlock.setAttribute("style", "display:block");
  setTime();
  quizCycle();
});

//Countdown Function
function setTime() {
  var id = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(id);
    }
  }, 1000);
}
//Displays questions and answers from quizCycle to
function quizCycle() {
  questionDisplay.textContent = quizQuests[index].question;
  A.textContent = quizQuests[index].answers.A;
  B.textContent = quizQuests[index].answers.B;
  C.textContent = quizQuests[index].answers.C;
}

for (let i = 0; i < quizQuests.length; i++) {
  console.log(quizQuests[i].question);
}
