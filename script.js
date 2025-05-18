const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  const resultText = document.getElementById("result");

  let message = `You chose ${playerChoice}, computer chose ${computerChoice}. `;

  // Add background flash
  if (result === "win") {
    flashScreen("rgba(0, 255, 0, 0.4)"); // green
    message += "You win!";
  } else if (result === "lose") {
    flashScreen("rgba(255, 0, 0, 0.4)"); // red
    message += "You lose!";
  } else {
    flashScreen("rgba(128, 128, 128, 0.4)"); // gray
    message += "It's a tie!";
  }

  resultText.textContent = message;
}

function flashScreen(color) {
  const flash = document.createElement("div");
  flash.style.position = "fixed";
  flash.style.top = 0;
  flash.style.left = 0;
  flash.style.width = "100vw";
  flash.style.height = "100vh";
  flash.style.backgroundColor = color;
  flash.style.zIndex = 1000;
  flash.style.pointerEvents = "none";
  flash.style.transition = "opacity 0.4s ease-out";
  flash.style.opacity = "1";

  document.body.appendChild(flash);

  setTimeout(() => {
    flash.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    document.body.removeChild(flash);
  }, 500);
}
