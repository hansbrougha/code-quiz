# 04 Web APIs: Code Quiz

This was, by far, the most challenging assignment so far. I managed to get with a tutor to help me understand why I was having difficulty and managed to get a few things working.

I started with a bootstrap layout for a responsive layout.
I placed a div in the center of the page holding the instructions.

My script begins with a querySelector. When the first button is clicked, the quiz begins and the timer starts counting down from 100.

My question variables are next. The answerBlock at the bottom gets the new page element/question and places it in the center div. This is followed by my countdown variables.

This is followed by my question array, each containing 3 possible answers.

The addEventListener or the answer block contains a clickvalue with conditionals that display whether an answer is correct or incorrect. I didn't manage to get this to populate on the page, but is logged in a console.log.

The next block fo code starting at 132. It contains an addEventListener that displays a new question div and hides the previous div.

My setTime function sets the interval for my clock. The quizCycle function cycles through the questions and answers in the questions array. This is followed by a conditional. The console log logs the questions in the console.
