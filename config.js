function openPlyaerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  errorsOutputElement.textContent = "";
  inputElement.textContent = "";
  formElement.firstElementChild.classList.remove("error");
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayername = formData.get("playername").trim();
  if (!enteredPlayername) {
    errorsOutputElement.textContent = "Please Provide a valid name!";
    e.target.firstElementChild.classList.add("error");
    return;
  }
  errorsOutputElement.textContent = "";
  e.target.firstElementChild.classList.remove("error");
  const updatedPlayerdataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );
  console.log(editedPlayer);
  updatedPlayerdataElement.children[1].textContent = enteredPlayername;
  players[editedPlayer - 1].name = enteredPlayername;
  closePlayerConfig();
}
