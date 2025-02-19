const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const res = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}