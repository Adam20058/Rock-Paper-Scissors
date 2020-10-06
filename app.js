// I cached the dom.... basicall stored all the variables for future use.. 37.31
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//defining game function
// randomize computer choice
function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUseWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUseWord} beats ${convertToWord(computerChoice)}${smallcompWord}. You win!`;

}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUseWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUseWord} loses to ${convertToWord(computerChoice)}${smallcompWord}. You lost`;
}

function draw(userChoice, computerChoice) {
  const smallUseWord = "user".fontsize(3).sub();
  const smallcompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUseWord} equals ${convertToWord(computerChoice)}${smallcompWord}. It's a draw 🙅🏽‍♂️!`;
}

// user/ choice choice
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log("USER WINS.");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log("USER LOSES.")
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log("It's a draw")
      draw(userChoice, computerChoice);
      break;
  }

}

function main() {
  //event listeners for each button
  rock_div.addEventListener('click', function () {
    game("r");
  })
  paper_div.addEventListener('click', function () {
    game("p");
  })
  scissors_div.addEventListener('click', function () {
    game("s");
  })
}


main();