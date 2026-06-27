"use strict";

let secretNumber;

function randomFunction() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

randomFunction();

const again = document.querySelector(".again");
const number = document.querySelector(".number");
const input = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

let scoreBall = 20;

checkBtn.addEventListener("click", function () {
  if (input.value === "") {
    input.style.borderColor = "red";

    setTimeout(() => {
      input.style.borderColor = "white";
    }, 1000);

    return;
  }

  const guess = Number(input.value);

  if (guess > secretNumber) {
    scoreBall--;
    score.textContent = scoreBall;

    if (scoreBall <= 0) {
      message.textContent = "Yutqazdingiz!";
      score.textContent = 0;
      document.body.style.backgroundColor = "red";
    } else {
      message.textContent = "Juda baland!";
    }
  } else if (guess < secretNumber) {
    scoreBall--;
    score.textContent = scoreBall;

    if (scoreBall <= 0) {
      message.textContent = "Yutqazdingiz!";
      score.textContent = 0;
      document.body.style.backgroundColor = "red";
    } else {
      message.textContent = "Juda past!";
    }
  } else {
    message.textContent = " Siz g'alaba qozondingiz!";
    number.textContent = secretNumber;
    document.body.style.backgroundColor = "green";

    if (scoreBall > Number(highscore.textContent)) {
      highscore.textContent = scoreBall;
    }
  }
});

again.addEventListener("click", function () {
  scoreBall = 20;
  score.textContent = scoreBall;


  randomFunction();

  input.value = "";
  number.textContent = "?";
  message.textContent = "Taxmin qiling...";
  document.body.style.backgroundColor = "#222";
  input.style.borderColor = "white";
});




