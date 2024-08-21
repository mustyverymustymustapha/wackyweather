const wackyForecasts = [
  "Cats and Dogs Raining",
  "The Sun Exploding",
  "Gravity Reversal Day",
  "Technicolor Tornado",
  "Spaghetti Snowstorm",
  "Marshmallow Meteor Shower",
  "Bubble Gum Blizzard",
  "Disco Ball Sun",
  "Pizza-scented Fog",
  "Talking Cloud Convention"
];

const weatherTips = [
  "Don't forget your umbrella... and your scuba gear!",
  "Wear sunglasses to protect from the glitter storm",
  "Bring a fork for the spaghetti snowstorm",
  "Pack a camera to capture the flying pigs",
  "Prepare for sudden changes in gravity",
  "Practice your cloud whispering skills",
  "Bring earplugs for the thunder karaoke",
  "Watch out for falling marshmallows",
  "Dress in layers... of bubble wrap",
  "Don't forget to bring your sense of humor!"
];

const backgroundColors = [
   "#FFD700",  // gold
   "#FF6347",  // red i think
   "#00CED1",  // i forgor
   "#FF69B4",  // pink
   "#32CD32",  // gren
   "#9370DB",  // purp
   "#FF4500",  // orangish red
   "#1E90FF",  // this was boue
   "#FF1493",  // pink
   "#00FA9A"   // this was a green
 ];

const weatherIcons = [
  "🐱🐶", "💥", "🙃", "🌈🌪️", "🍝❄️",
  "🍡☄️", "🍬❄️", "🕺☀️", "🍕🌫️", "☁️💬"
];

function generateForecast() {
  const forecastElement = document.getElementById('forecast');
  const tipElement = document.getElementById('weather-tip');
  const iconElement = document.getElementById('weather-icon');
  const randomIndex = Math.floor(Math.random() * wackyForecasts.length);
  const randomTipIndex = Math.floor(Math.random() * weatherTips.length);
  forecastElement.textContent = `It'll be ${wackyForecasts[randomIndex]} tomorrow!`;
  tipElement.textContent = `Tip: ${weatherTips[randomTipIndex]}`;
  iconElement.textContent = weatherIcons[randomIndex];
  changeBackgroundColor(randomIndex);
}

function changeBackgroundColor(index) {
  document.body.style.backgroundColor = backgroundColors[index];
}

function show5DayForecast() {
  document.getElementById('main-section').classList.add('hidden');
  document.getElementById('five-day-section').classList.remove('hidden');
  generate5DayForecast();
}

function showMainSection() {
  document.getElementById('five-day-section').classList.add('hidden');
  document.getElementById('main-section').classList.remove('hidden');
}

function generate5DayForecast() {
  const fiveDayForecastElement = document.getElementById('five-day-forecast');
  fiveDayForecastElement.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
      const randomIndex = Math.floor(Math.random() * wackyForecasts.length);
      const dayForecast = document.createElement('div');
      dayForecast.classList.add('day-forecast');
      dayForecast.innerHTML = `
          <div class="day-forecast-icon">${weatherIcons[randomIndex]}</div>
          <h3>Day ${i}</h3>
          <p>It'll be ${wackyForecasts[randomIndex]}</p>
      `;
      dayForecast.style.backgroundColor = backgroundColors[randomIndex];
      fiveDayForecastElement.appendChild(dayForecast);
  }
}