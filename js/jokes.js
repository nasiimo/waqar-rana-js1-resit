const jokesUrl = "https://official-joke-api.appspot.com/random_ten";
const jokeContainer = document.querySelector("div.row");

(async function () {
  try {
    const response = await fetch(jokesUrl);
    const jokes = await response.json();
    const pageTitle = document.querySelector("title");
    pageTitle.innerHTML = jokes[2].setup;
    renderjokes(jokes);
  } catch {
    const heading = document.querySelector("h1");
    heading.innerHTML = "An error occured";
  }
})();

function renderjokes(jokes) {
  jokeContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    jokeContainer.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
                                <div class="card">
                                    <div class="joke-detail">
                                        <h4 class="type">${jokes[i].type}</h4>
                                        <div class="setup">${jokes[i].setup}</div>
                                        <div class="punchline">${jokes[i].punchline}</div>
                                    </div>
                                </div>
                            </div>`;
  }
}
