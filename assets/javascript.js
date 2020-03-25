// VARIABLES
var timerEl = document.querySelector("#timer");
var firstQChoices = ["HTML", "Javascript", "CSS", "C++"];
var secondQChoices = ["<IMG>", "<PNG>", "<JPG>", "<DIV>"];
var thirdQChoices = ["an ID", "a Class", "an Unordered List", "Group Styling"];
var fourthQChoices = [".getElementById", "reference(element)", "choose(element)", ".identifyElement"];
var fifthQChoices = [".css", ".html", ".script", ".js"];
var answerArray = ["blank", firstQChoices, secondQChoices, thirdQChoices, fourthQChoices, fifthQChoices];
var questionArray = ["Poppe's Coding Challenge Extraordinaire","What language do you use to add style to a webpage?", "What HTML element would you use to show a picture?", "What would you use to style multiple elements at once?", "What could you use to reference a specific page element in Javascript?", "What type of file do you typically use to run scripts?"];
var correctArray = ["CSS", "<IMG>", "a Class", ".getElementById", ".js"]
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
var hiscoreEntry = document.querySelector("#hiscoreEntry");
var hiscoreRecords = [];
var hiscoreForm = document.querySelector("#hiscoreForm");
var score = 0;
var secondsLeft = 0;
var currentIndex = 0;
var timerInterval;

// Grab stored Hiscores
init();

// Function to start timer
function startTimer(){
    secondsLeft = 60;
    timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time remaining: " + secondsLeft;
        // If timer runs out, Game Over
        if(secondsLeft === 0){
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

// Function to stop the Timer
function stopTimer(){
    clearInterval(timerInterval);
}

// Function to move to the next Question, set options for next Question
function nextQuestion(){
    // If moving from start page, initialize hiding/showing of objects
    if(currentIndex === 0){
        var state = optionList.getAttribute("data-state");
        optionList.setAttribute("data-state", "visible")
        optionList.classList.remove("hidden");
        intro.classList.add("hidden");
        intro.setAttribute("data-state", "hidden");
        startButton.classList.add("hidden");
        startButton.setAttribute("data-state", "hidden");
        timerEl.classList.remove("hidden");
        timerEl.setAttribute("data-state", "visible");
        // Start timer
        startTimer();
    }
    // If finished with questions, game over
    if(currentIndex === correctArray.length){
        gameOver();
    }
    // Else move on to next question and set response buttons
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

//Function to verify if an answer is correct
function AnsCheck(input){
    var index = correctArray.indexOf(input);
    // Verify if answer exists in answer array
    if(index === -1){
        wrongAnswer();
    }
    else{
        correctAnswer();
    }
}

// Function for result when answer is wrong
function wrongAnswer(){
    reporter.textContent = "Wrong!";
    secondsLeft -= 10;
    nextQuestion();
}

// Function for result when answer is right
function correctAnswer(){
    reporter.textContent = "Correct!";
    score += 100;
    nextQuestion();
}

// Function to navigate to Hiscores
function scoreboard(){
    var listState = optionList.getAttribute("data-state");
    // Hide answer buttons if currently showing
    if(listState === "visible"){
        optionList.classList.add("hidden");
        optionList.setAttribute("data-state", "hidden");
    }
    // Hide intro and start button if currently showing
    var introState = intro.getAttribute("data-state");
    if(introState === "visible"){
        intro.classList.add("hidden");
        intro.setAttribute("data-state", "hidden");
        startButton.classList.add("hidden");
        startButton.setAttribute("data-state", "hidden");
    }
    // Hide hiscore entry box if showing
    var hiscoreEntryState = hiscoreEntry.getAttribute("data-state");
    if(hiscoreEntryState === "visible"){
        hiscoreEntry.classList.add("hidden");
        hiscoreEntry.setAttribute("data-state", "hidden");
    }
    // Clear index and notification box, display hiscore list
    reporter.textContent = "";
    hiscore.classList.remove("hidden");
    hiscore.setAttribute("data-state", "visible");
    currentIndex = 0;
}

// Function to alert game over and do score collection
function gameOver(){
    stopTimer();
    // Score bonus for time left over
    var timeBonus = secondsLeft * 10;
    score += timeBonus;
    console.log(score);

    alert("Game Over!");
    // If hiscore is hidden, display hiscore entry box and list
    var hiscoreState = hiscore.getAttribute("data-state");
    if(hiscoreState === "hidden"){
        hiscore.classList.remove("hidden");
        hiscore.setAttribute("data-state", "visible");
        hiscoreEntry.classList.remove("hidden");
        hiscoreEntry.setAttribute("data-state", "visible");
    }
    // If answer buttons are showing, hide them
    var listState = optionList.getAttribute("data-state");
    if(listState === "visible"){
        optionList.classList.add("hidden");
        optionList.setAttribute("data-state", "hidden");
    }
    // Reset notification box, hide timer
    reporter.textContent = "";
    timerEl.classList.add("hidden");
    timerEl.setAttribute("data-state", "hidden");
}

// Function to reset to start of quiz
function resetQuiz(){
    questionBox.textContent = questionArray[0];
    // If answer buttons are showing, hide them
    var listState = optionList.getAttribute("data-state");
    if(listState === "visible"){
        optionList.classList.add("hidden");
        optionList.setAttribute("data-state", "hidden");
    }
    // If intro and start button are showing, hide them
    var introState = intro.getAttribute("data-state");
    if(introState === "hidden"){
        intro.classList.remove("hidden");
        intro.setAttribute("data-state", "visible");
        startButton.classList.remove("hidden");
        startButton.setAttribute("data-state", "visible");
    }
    // If hiscore list is showing, hide it
    var hiscoreState = hiscore.getAttribute("data-state");
    if(hiscoreState === "visible"){
        hiscore.classList.add("hidden");
        hiscore.setAttribute("data-state", "hidden");
    }
    // If hiscore entry box is showing, hide it
    var hiscoreEntryState = hiscoreEntry.getAttribute("data-state");
    if(hiscoreEntryState === "visible"){
        hiscoreEntry.classList.add("hidden");
        hiscoreEntry.setAttribute("data-state", "hidden");
    }
    // If timer is showing, hide it
    var timerElState = timerEl.getAttribute("data-state")
    if(timerElState === "visible"){
    timerEl.classList.add("hidden");
    timerEl.setAttribute("data-state", "hidden");
    }
    // Reset index and score to zero, clear notification box
    stopTimer();
    secondsLeft = 60;
    currentIndex = 0;
    reporter.textContent = "";
    score = 0;
}

// Function to store Hiscores in local storage
function storeHiscores() {
    localStorage.setItem("hiscores", JSON.stringify(hiscoreRecords));
  }

// Render a new div for each Hiscore
function renderHiscores(){
    for(i=0; i<hiscoreRecords.length; i++){
        var currentScore = hiscoreRecords[i];
        // Create new Div for each hiscore
        var newDiv = document.createElement("div");
        newDiv.textContent = currentScore;
        // Append the Div to the hiscore list
        hiscore.appendChild(newDiv);
    }
}

// Initiate loading hiscores from localstorage
function init(){
    var storedHiscores = JSON.parse(localStorage.getItem("hiscores"));
    // Set current hiscores to equal all hiscores from local storage
    if(storedHiscores !== null){
        hiscoreRecords = storedHiscores;
    }

    renderHiscores();
}

// Gather new hiscore from listener
hiscoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var Name = hiscoreEntry.value;

    if (Name === "") {
        return;
    }
    // Log new hiscore, store is in hiscores array
    scoreName = Name + "-----" + score;
    console.log(scoreName);
    hiscoreRecords.push(scoreName);
    hiscoreEntry.value = "";

    var newDiv = document.createElement("div");
    // Create New Div
    newDiv.textContent = scoreName;
    // Append the Div to the hiscore list
    hiscore.appendChild(newDiv);

    storeHiscores();
    
})

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