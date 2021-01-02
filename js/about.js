let paragraphContainer = document.querySelector(".about");
let paragraphs = document.querySelectorAll(".about p");
let array = [paragraphs[0], paragraphs[1]];

function reverseParagraphs(paragraph) {
  array.reverse();
  paragraphContainer.innerHTML = "";
  for (let i = 0; i < paragraph.length; i++) {
    paragraphContainer.innerHTML += `<p>${paragraph[i].innerText}</p>`;
  }
}

reverseParagraphs(array);
