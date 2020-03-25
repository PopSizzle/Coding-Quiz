# Coding-Quiz

For this project I built a coding quiz as an example of something that a job applicant might go through in the interview process. The goal was to make a functioning quiz that allowed the user to move through a series of questions while answering to the best of their ability. The quiz includes a time limit that is constantly counting down as the quiz continues, a 10 seconds time penalty for incorrect answers, and a hiscores list as well as a form for entering your own score in the hiscores.

## Skills Used

The coding for this quiz required some HTML and CSS work, but the vast majority of the work was done in the javascript file. Many functions and variables were used to assess a correct/incorrect answer, navigate to the next question, determine the score result, store the score result, and display the hiscores. I often used the method of hiding/displaying different elements on the page depending on which part of the quiz the user was in. I used arrays of questions, answers, and an array of correct answers to store information that I referenced during the quiz.

### Examples of Code Used

Many of the variables in the .js file referred to specific elements on the page so that I could point to them more quickly and easily in the process of coding the quiz. Here is an example of those variables:

```
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
```

### Final Product

The final product is a streamlined quiz that can be adapted to fit any hiring process. The questions and answers can be easily switched out in the javascript file without the need to modify any other piece of the existing code. An employer could make the quiz longer or shorter, cover a range of topics, and store data about which hires performed best with barely any work on their part.


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [https://popsizzle.github.io/Coding-Quiz/](#)


## Authors

*Sam Poppe

- [https://github.com/PopSizzle/Responsive-Portfolio#](#)
- [https://github.com/PopSizzle](https://github.com/)
- [https://www.linkedin.com/in/sam-poppe-623281193/](https://www.linkedin.com/)

## Acknowledgments

* Special thanks to my instructor Jerome Chenetter, my TAS Kerwin Hy and Mahisha Gunasekaran for all of their help, and Cristina Terry for suggesting how to utilize an array of answers.