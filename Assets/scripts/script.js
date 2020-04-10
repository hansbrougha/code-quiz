//var startQuiz = document.getElementById("startBtn");
//startCount.addEventListener("click", startCount);
//quizQuests.addEventListener("click", quizQuests);
//
////Click Event Starts Countdown from 100 AND populates first question into main div.
//function startCount() {
//  //Count down from 100
//}
//
var startBtn = document.querySelector("#start-btn");
console.log(startBtn);
var timeEl = document.querySelector(".time");
var questionDisplay = document.getElementById("question");
var secondsLeft = 101;
var startMessage = document.getElementById("start-message");
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
      A:
        "Assists with script debugging by writing information directly to the browser console.",
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
    question: "Which of the following is considered an Operator?",
    answers: {
      A: "$",
      B: "%=",
      C: "##",
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
    question: "Which of the following is considered an Operator?",
    answers: {
      A: "$",
      B: "%=",
      C: "##",
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
    question: "Which of the following is considered an Operator?",
    answers: {
      A: "$",
      B: "%=",
      C: "##",
    },
    correctAnswer: "C",
  },
];
console.log(quizQuests);

questionDisplay.textContent = quizQuests[1].question;

startBtn.addEventListener("click", function (event) {
  startMessage.setAttribute("style", "display:none");
  startMessage.setAttribute("style", "display:block");
  setTime();
});
function setTime() {
  var id = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(id);
    }
  }, 1000);
}
//display block

function quizCycle() {}

/*var startBtn = document.querySelector(#)

function beginQuiz() {
    
  document.getElementById();
  document.getElementById("quest1").innerHTML = "#quest1";
  
}
document.getElementById("myDIV").innerHTML = "#quest1";


*/
//fill in below as you need
/*var quizQuestions = ("quest1","quest2","quest3","quest4","quest5","quest6","quest7","quest8","quest9","quest10");

    if (quest1 === true){
        document.getElementById("quest2").innerHTML = "#quest2";
    else if 
    }

    
    
    First Jumbotron containing start button is displayed by default.
        Click button to start game and countdown.

*/
