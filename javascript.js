// VARIABLES
var timerEl = document.querySelector("#timer");
var firstQChoices = ["blue", "purple", "red", "green"];
var secondQChoices = ["10", "20", "30", "40"];
var thirdQChoices = ["lions", "Hyenas", "Giraffes", "Elephants"];
var fourthQChoices = ["Fairies", "Dragons", "Unicorns", "Hydras"];
var fifthQChoices = ["Oak", "Teak", "Mahogany", "Cherry"];
var answerArray = ["blank", firstQChoices, secondQChoices, thirdQChoices, fourthQChoices, fifthQChoices];
var questionArray = ["Poppe's Coding Challenge Extraordinaire","How do you do thing 1?", "How do you do thing 2?", "How do you do thing 3?", "How do you do thing 4", "How do you do thing 5?"];
var correctArray = ["blue", "10","Giraffes", "Dragons", "Mahogany"]
var questionBox = document.querySelector("#questionBox");
var intro = document.querySelector("#intro");
var startButton = document.querySelector("#startButton");
var optionList = document.querySelector("#optionList");
var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var reporter = document.querySelector("#reporter");
var ansButtons = [button1, button2, button3, button4];
var reset = document.querySelector("#reset");
var hiscoreLink = document.querySelector("#hiscore-link");
var hiscore = document.querySelector("#hiscore");
var score = 0;
var secondsLeft = 0;
var currentIndex = 0;

// Timer in the upper right
function startTimer(){
    secondsLeft = 60;
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
    
    var listState = optionList.getAttribute("data-state");
    if(listState === "visible"){
        optionList.classList.add("hidden");
        optionList.setAttribute("data-state", "hidden");
    }

    var introState = intro.getAttribute("data-state");
    if(introState === "hidden"){
        intro.classList.remove("hidden");
        intro.setAttribute("data-state", "visible");
        startButton.classList.remove("hidden");
        startButton.setAttribute("data-state", "visible");
    }

    var hiscoreState = hiscore.getAttribute("data-state");
    if(hiscoreState === "visible"){
        hiscore.classList.add("hidden");
        hiscore.setAttribute("hidden");
    }

    timerEl.classList.add("hidden");
    currentIndex = 0;
    reporter.textContent = "";
}

// Move to the next Question, set options for next Question
function nextQuestion(){
    if(currentIndex === 0){
        var state = optionList.getAttribute("data-state");
        optionList.setAttribute("data-state", "visible")
        optionList.classList.remove("hidden");
        intro.classList.add("hidden");
        intro.setAttribute("data-state", "hidden");
        startButton.classList.add("hidden");
        startButton.setAttribute("data-state", "hidden");
        timerEl.classList.remove("hidden");
        startTimer();
    }
    if(currentIndex === correctArray.length){
        alert("GAME OVER!");
    }
    else{
        currentIndex ++;
        console.log(currentIndex);
        questionBox.textContent = questionArray[currentIndex];
        var answerSet = answerArray[currentIndex];
        button1.textContent = answerSet[0];
        button2.textContent = answerSet[1];
        button3.textContent = answerSet[2];
        button4.textContent = answerSet[3];
    }
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
    score += 100;
    nextQuestion();
}

// Check if an answer is correct
function AnsCheck(input){
    var index = correctArray.indexOf(input);
    if(index === -1){
        wrongAnswer();
    }
    else{
        correctAnswer();
    }
}

// Go to Hiscores
function scoreboard(){
    var listState = optionList.getAttribute("data-state");
    if(listState === "visible"){
        optionList.classList.add("hidden");
        optionList.setAttribute("data-state", "hidden");
    }
    
    var introState = intro.getAttribute("data-state");
    if(introState === "visible"){
        intro.classList.add("hidden");
        intro.setAttribute("data-state", "hidden");
        startButton.classList.add("hidden");
        startButton.setAttribute("data-state", "hidden");

    }
    reporter.textContent = "";
    hiscore.classList.remove("hidden");
    hiscore.setAttribute("data-state", "visible");
}

// Start Button Event Listener
startButton.addEventListener("click", nextQuestion);

// Reset Button Event Listener
reset.addEventListener("click", resetQuiz);

// Event Listener for the Hiscores
hiscoreLink.addEventListener("click", scoreboard);

// event listeners for answer buttons
for(i=0; i<ansButtons.length; i++){
        var button = ansButtons[i];
        button.addEventListener("click", function(){
        var input = this.textContent;
        console.log(input);
        AnsCheck(input);
    })
}