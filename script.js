 const generateButton = document.getElementById('generate');
const storyDiv = document.getElementById('story');
const toggleButton = document.querySelector('.toggle-btn');
let darkMode = false;

function generateStory() {
  const name = document.getElementById('nameInput').value || 'Sparky';
  const sillyAnimals = ['unicorn', 'sloth', 'penguin', 'fluffy dragon'];
  const places = ['a magical forest', 'the moon', 'a donut factory', 'under the bed'];
  const actions = ['sang a lullaby', 'juggled pancakes', 'did a little dance', 'told a knock-knock joke'];

  const animal = sillyAnimals[Math.floor(Math.random() * sillyAnimals.length)];
  const place = places[Math.floor(Math.random() * places.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];

  const story = `${name} went to ${place} with a cheerful ${animal}. Out of nowhere, the ${animal} ${action}, and the whole world smiled. ❤️`;

  storyDiv.textContent = story;
  storyDiv.classList.add('show');
}

function toggleMode() {
  document.body.classList.toggle('dark');
  darkMode = !darkMode;
  toggleButton.textContent = darkMode ? 'Switch to Light Mode ☀️' : 'Switch to Dark Mode 🌙';
}

generateButton.addEventListener('click', generateStory);
