const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  { name: "", symbol: "O" },
];
const playerConfigOverlayElement = document.getElementById("config-overlay");
const inputElement = document.getElementById("playername");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaElement = document.getElementById("active-game");
const gameOverElement = document.getElementById("game-over");
const gameBoardElement = document.getElementById("game-board");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameFieldElemnts = document.querySelectorAll("#game-board li");

const cancelBtnELement = document.getElementById("cancel-config-btn");

editPlayer1BtnElement.addEventListener("click", openPlyaerConfig);
editPlayer2BtnElement.addEventListener("click", openPlyaerConfig);
startNewGameBtnElement.addEventListener("click", startNewGame);
cancelBtnELement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

for (const gameFieldElemnt of gameFieldElemnts) {
  gameAreaElement.addEventListener("click", selectGameField);
}
