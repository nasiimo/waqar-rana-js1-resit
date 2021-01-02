const input = document.querySelector("input");
const resetButton = document.querySelector(".reset");
const container = document.querySelector(".dynamic-divs");

input.addEventListener("keypress", fire);

function fire(event) {
  console.log(event);
}
