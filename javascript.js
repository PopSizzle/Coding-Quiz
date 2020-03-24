// VARIABLES
var timerEl = document.querySelector("#timer");
var firstQChoices = ["Q1Answer1", "Q1Answer2", "Q1Answer3", "Q1Answer4"];
var secondQChoices = ["Q2Answer1", "Q2Answer2", "Q2Answer3", "Q2Answer4"];
var thirdQChoices = ["Q3Answer1", "Q3Answer2", "Q3Answer3", "Q3Answer4"];
var fourthQChoices = ["Q4Answer1", "Q4Answer2", "Q4Answer3", "Q4Answer4"];
var fifthQChoices = ["Q5Answer1", "Q5Answer2", "Q5Answer3", "Q5Answer4"];
var answerArray = ["blank", firstQChoices, secondQChoices, thirdQChoices, fourthQChoices, fifthQChoices];
var questionArray = ["Poppe's Coding Challenge Extraordinaire","How do you do thing 1?", "How do you do thing 2?", "How do you do thing 3?", "How do you do thing 4", "How do you do thing 5?"];
var questionBox = document.querySelector("#questionBox");
var intro = document.querySelector("#intro");
var startButton = document.querySelector("#startButton");
var optionList = document.querySelector("#optionList");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var reporter = document.querySelector("#reporter");
var secondsLeft = 60;
var currentIndex = 0;

// Timer in the upper right
function startTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time remaining: " + secondsLeft;
        
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            // gameOver();
        }
    }, 1000);
}

// Reset from the end
function resetQuiz(){
    questionBox.textContent = questionArray[0];
    intro.removeClass("hidden");
    currentIndex = 0;
}

// Move to the next Question
function nextQuestion(){
    var state = optionList.getAttribute("data-state");
    if(state === "hidden"){
        optionList.setAttribute("data-state", "visible")
        optionList.classList.remove("hidden");
        intro.classList.add("hidden");
        startButton.classList.add("hidden");
    }
    currentIndex ++;
    console.log(currentIndex);
    questionBox.textContent = questionArray[currentIndex];
    var answerSet = answerArray[currentIndex];
    button1.textContent = answerSet[0];
    button2.textContent = answerSet[1];
    button3.textContent = answerSet[2];
    button4.textContent = answerSet[3];

    setAnswers();
}

// Reset the correct/incorrect answers-NOT WORKING
function setAnswers(){
    var correctChoice
    if(currentIndex === 1 || 5){
        correctChoice = button2;
    } else if(currentIndex === 2 || 4){
        correctChoice = button1;
    } else if(currentIndex === 3);
        correctChoice = button3;
    correctChoice.addEventListener("click", correctAnswer);
}

// Result when answer is wrong
function wrongAnswer(){
    reporter.textContent = "Wrong!";
    secondsLeft -= 10;
    nextQuestion();
}

// Result when answer is right
function correctAnswer(){
    reporter.textContent = "Correct!";
    nextQuestion();
}

startButton.addEventListener("click", nextQuestion);
