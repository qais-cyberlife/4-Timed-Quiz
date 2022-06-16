// Defines the variable Quiz and Question
var quiz = document.querySelector (".quiz")
var question = document.querySelector(".question")

// Defines the Variable of the Buttons A,B,C,D (the chocices)
var a = document.querySelector(".a")
var b = document.querySelector(".b")
var c = document.querySelector(".c")
var d = document.querySelector(".d")

var a2 = document.querySelector(".a2")
var b2 = document.querySelector(".b2")

var a3 = document.querySelector(".a3")
var b3 = document.querySelector(".b3")
var c3 = document.querySelector(".c3")
var d3 = document.querySelector(".d3")

var a4 = document.querySelector(".a4")
var b4 = document.querySelector(".b4")
var c4 = document.querySelector(".c4")
var d4 = document.querySelector(".d5")

var a5 = document.querySelector(".a5")
var b5 = document.querySelector(".b5")
var c5 = document.querySelector(".c5")

// Defines the Start button and the area where the Right and Wrong Message is Displayed
var startBtn = document.querySelector(".start-quiz-btn")
var rightWrong = document.querySelector (".rightWrong")

var secondsLeft = 61;
timer = document.querySelector(".timer")


// Sets the timer
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " Seconds Left";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      ;
    }

  }, 1000);
}

// Shows a Wrong message and penalized 10 second if the answer is wrong
function wrongAnswer () {
  secondsLeft = secondsLeft -10;
  rightWrong.textContent = "WRONG!❌";
}

// Shows a right message if the answer is right
function rightAnswer () {
  rightWrong.textContent ="Right! ✅";
}

// Question 1 Content; C is Right
function question1 () {
    question.textContent = "Q1: What is the correct JavaScript syntax to write 'Hello World' ?";
    a.textContent = "a. ('Hello World');" ;
    b.textContent = "b. echo 'Hello World';" ;
    c.textContent = "c. document.write('Hello World');";
    d.textContent = "d. response.write('Hello World')"; 
    startBtn.textContent = ""
// these variable are the choices in the next question

    }

    // Question 2 Content; B is right 
function question2() {
  a.textContent = "" ;
  b.textContent = "" ;
  c.textContent = "";
  d.textContent = ""; 
        question.textContent = "Q2: What is the correct JavaScript syntax to write 'Hello World' ?";
        a2.textContent = "a. True" ;
        b2.textContent = "b. False" ;
}

// Question 3 Content; B is right
function question3 () {
  a2.textContent = "" ;
  b2.textContent = "" ;
  c2.textContent = "";
  d2.textContent = ""; 

  question.textContent = "Q3: How would you write 'Hello World' in an alert box ?";
  a3.textContent = "a. msg('Hello World');" ;
  b3.textContent = "b. alert('Hello World');" ;
  c3.textContent = "c. msgBox('Hello World');";
  d3.textContent = "d. alertBox('Hello World');"; 
}

// Question 4 Content; D is right 
function question4 () {
  question.textContent = "Q4: How to write an IF statement in JavaScript?";
  a4.textContent = "if i = 5 then" ;
  b4.textContent = "if i = 5" ;
  c4.textContent = "if i==5 then";
  d4.textContent = "if (i==5)"; 
}

// Question 5 Content; A is right
function question5 () {
  question.textContent = "Q5: How would you write 'Hello World' in an alert box ?";
  a5.textContent = "myFunction()" ;
  b5.textContent = "call function myFunction()" ;
  c5.textContent = "call my Function()";
}

// CBBDA
// Starts the quiz and sets the timer if Start button is pressed
startBtn.addEventListener("click",setTime,);
startBtn.addEventListener("click",question1,);


// Q1: Will move to Question 2 if any button is clicked. If any answer other than C is selected; 10 seconds will be deducted.
a.addEventListener("click",question2)
a.addEventListener("click",wrongAnswer)

b.addEventListener("click",question2)
b.addEventListener("click",wrongAnswer)

c.addEventListener("click",question2)
c.addEventListener("click",rightAnswer)

d.addEventListener("click",question2)
d.addEventListener("click",wrongAnswer)
 
// Q2: Will move to Question 3 if any button is clicked. If any answer other than B is selected; 10 seconds will be deducted.\\
a2.addEventListener("click",question3)
a2.addEventListener("click",wrongAnswer)

b2.addEventListener("click",question3)
b2.addEventListener("click",rightAnswer)

// Q3: Will move to Question 4 if any button is clicked. If any answer other than B is selected; 10 seconds will be deducted.\\
a3.addEventListener("click",question4)
a3.addEventListener("click",wrongAnswer)

b3.addEventListener("click",question4)
b3.addEventListener("click",rightAnswer)

c3.addEventListener("click",question4)
c3.addEventListener("click",wrongAnswer)

d3.addEventListener("click",question4)
d3.addEventListener("click",wrongAnswer)