const input = document.querySelector("input");
const resetButton = document.querySelector(".reset");
const container = document.querySelector(".dynamic-divs");

input.addEventListener("keyup"/*Keypress?*/, generateHtml);

function generateHtml(event) {
  const inputValue = input.value.trim();
  container.innerHTML = "";
  for (i = 0; i < inputValue; i++) {
    container.innerHTML += `<div>Number ${(i + 1)}</div>`;
  }
}

resetButton.addEventListener("click", removeHtml);

function removeHtml() {
  container.innerHTML = "";
  input.value = "";
}

