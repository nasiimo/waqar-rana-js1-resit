const jokeUrl = "https://official-joke-api.appspot.com/random_joke";

(async function () {
  const container = document.querySelector("main.container");
  try {
    const response = await fetch(jokeUrl);
    const joke = await response.json();
    const pageTitle = document.querySelector("title");
    pageTitle.innerHTML = joke.setup;
    container.innerHTML = "";
    container.innerHTML += `<h1>JavaScript 1 CA Resit</h1>
                                <h2>${joke.type} joke</h2>
                                <div class="joke setup">${joke.setup}</div>
                                <div class="joke punchline">${joke.punchline}</div>`;
  } catch {
    const heading = document.querySelector("h2");
    heading.innerHTML = "An error occured";
  }
})();
