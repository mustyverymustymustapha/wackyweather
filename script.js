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

function generateForecast() {
  const forecastElement = document.getElementById('forecast');
  const tipElement = document.getElementById('weather-tip');
  const randomForecastIndex = Math.floor(Math.random() * wackyForecasts.length);
  const randomTipIndex = Math.floor(Math.random() * weatherTips.length);
  forecastElement.textContent = `It'll be ${wackyForecasts[randomForecastIndex]} tomorrow!`;
  tipElement.textContent = `Tip: ${weatherTips[randomTipIndex]}`;
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
          <h3>Day ${i}</h3>
          <p>It'll be ${wackyForecasts[randomIndex]}</p>
      `;
      fiveDayForecastElement.appendChild(dayForecast);
  }
}