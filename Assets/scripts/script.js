//var startQuiz = document.getElementById("startBtn");
//startCount.addEventListener("click", startCount);
//quizQuests.addEventListener("click", quizQuests);
//
////Click Event Starts Countdown from 100 AND populates first question into main div.
//function startCount() {
//  //Count down from 100
//}
//
var startBtn = document.querySelector(".start-btn");
console.log(startBtn);
var timeEl = document.querySelector(".time");

var secondsLeft = 100;

//var time = document.querySelector(".secondsLeft");
//console.log("time");
startBtn.addEventListener("click", function (event) {
  setTime();
});
function setTime() {
  var id = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
//Access html element where you display time, bring into javascript, use google or class activities to display the seconds left on to html. Make a variable that has a string with your name in it and get your name to display.

function quizCycle() {
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
}

/*var startBtn = document.querySelector(#)

function beginQuiz() {
    
  document.getElementById();
  document.getElementById("quest1").innerHTML = "#quest1";
  
}
document.getElementById("myDIV").innerHTML = "#quest1";

var interval;

/*function countdown() {
  clearInterval(interval);
  interval = setInterval( function() {
      var timer = $('.js-timeout').html();
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

      $('.js-timeout').html(minutes + ':' + seconds);

      if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

$('#js-startTimer').click(function () {
  $('.js-timeout').text("2:00");
  countdown();
});

$('#js-resetTimer').click(function () {
  $('.js-timeout').text("2:00");
  clearInterval(interval);
});
/*
var counter = 0;
var timeleft = 60;

function convertSeconds(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ":" + nf(sec, 2);
}
console.log(convertSeconds);
function setup() {
  var params = getURLParams();
  console.log(params);
  if (params.minute) {
    var min = params.minute;
    timeleft = min * 60;
  }
  var timer = select("#timer");
  timer.html(convertSeconds(timeLeft - counter));

  function timeIt() {
    counter++;
    timer.html(convertSeconds(timeLeft - counter));
    if (counter == timeLeft) {
      counter = 0;
    }
  }
  setInterval(timeIt, 1000);
}
console.log(setup);
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
