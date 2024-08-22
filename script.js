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
    "#FFD700", "#FF6347", "#00CED1", "#FF69B4", "#32CD32",
    "#9370DB", "#FF4500", "#1E90FF", "#FF1493", "#00FA9A"
];

const weatherIcons = [
    "🐱🐶", "💥", "🙃", "🌈🌪️", "🍝❄️",
    "🍡☄️", "🍬❄️", "🕺☀️", "🍕🌫️", "☁️💬"
];

const weatherSounds = [
    "meow-woof.mp3",
    "explosion.mp3",
    "boing.mp3",
    "tornado.mp3",
    "slurp.mp3",
    "pop.mp3",
    "bubble-pop.mp3",
    "disco.mp3",
    "sizzle.mp3",
    "chatter.mp3"
];

let currentForecastIndex = -1;
let favorites = [];
let challenges = [];

function generateForecast() {
    const forecastElement = document.getElementById('forecast');
    const tipElement = document.getElementById('weather-tip');
    const iconElement = document.getElementById('weather-icon');
    currentForecastIndex = Math.floor(Math.random() * wackyForecasts.length);
    const randomTipIndex = Math.floor(Math.random() * weatherTips.length);
    forecastElement.textContent = `It'll be ${wackyForecasts[currentForecastIndex]} tomorrow!`;
    tipElement.textContent = `Tip: ${weatherTips[randomTipIndex]}`;
    iconElement.textContent = weatherIcons[currentForecastIndex];
    changeBackgroundColor(currentForecastIndex);
    playWeatherSound(currentForecastIndex);
}

function changeBackgroundColor(index) {
    document.body.style.backgroundColor = backgroundColors[index];
}

function playWeatherSound(index) {
    const soundToggle = document.getElementById('sound-toggle');
    const audio = document.getElementById('weather-sound');
    if (soundToggle.checked) {
        audio.src = weatherSounds[index];
        audio.play();
    }
}

function show5DayForecast() {
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('five-day-section').classList.remove('hidden');
    document.getElementById('custom-forecast-section').classList.add('hidden');
    document.getElementById('favorites-section').classList.add('hidden');
    document.getElementById('weather-challenges-section').classList.add('hidden');
    generate5DayForecast();
}

function showMainSection() {
    document.getElementById('five-day-section').classList.add('hidden');
    document.getElementById('main-section').classList.remove('hidden');
    document.getElementById('custom-forecast-section').classList.add('hidden');
    document.getElementById('favorites-section').classList.add('hidden');
    document.getElementById('weather-challenges-section').classList.add('hidden');
}

function showCustomForecastForm() {
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('five-day-section').classList.add('hidden');
    document.getElementById('custom-forecast-section').classList.remove('hidden');
    document.getElementById('favorites-section').classList.add('hidden');
    document.getElementById('weather-challenges-section').classList.add('hidden');
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

document.getElementById('custom-forecast-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const customForecast = document.getElementById('custom-forecast').value;
    const customTip = document.getElementById('custom-tip').value;
    const customIcon = document.getElementById('custom-icon').value;
    const customColor = document.getElementById('custom-color').value;

    wackyForecasts.push(customForecast);
    weatherTips.push(customTip);
    weatherIcons.push(customIcon);
    backgroundColors.push(customColor);
    weatherSounds.push("custom.mp3");

    alert("Custom forecast added successfully!");
    showMainSection();
});

function shareForecast() {
    const shareOptions = document.getElementById('share-options');
    shareOptions.classList.toggle('hidden');
}

function shareOnPlatform(platform) {
    if (currentForecastIndex === -1) {
        alert("Please generate a forecast first!");
        return;
    }

    const forecast = wackyForecasts[currentForecastIndex];
    const tip = document.getElementById('weather-tip').textContent;
    const shareText = `Check out this wacky weather forecast: ${forecast} ${tip}`;
    let shareUrl = '';

    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
            break;
    }

    window.open(shareUrl, '_blank');
}

function saveFavorite() {
    if (currentForecastIndex === -1) {
        alert("Please generate a forecast first!");
        return;
    }

    const favorite = {
        forecast: wackyForecasts[currentForecastIndex],
        tip: document.getElementById('weather-tip').textContent,
        icon: weatherIcons[currentForecastIndex],
        color: backgroundColors[currentForecastIndex]
    };

    favorites.push(favorite);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert("Forecast saved to favorites!");
}

function showFavorites() {
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('five-day-section').classList.add('hidden');
    document.getElementById('custom-forecast-section').classList.add('hidden');
    document.getElementById('favorites-section').classList.remove('hidden');
    document.getElementById('weather-challenges-section').classList.add('hidden');

    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach((favorite, index) => {
        const favoriteItem = document.createElement('div');
        favoriteItem.classList.add('favorite-item');
        favoriteItem.style.backgroundColor = favorite.color;
        favoriteItem.innerHTML = `
            <div class="favorite-icon">${favorite.icon}</div>
            <p>${favorite.forecast}</p>
            <p>${favorite.tip}</p>
            <button onclick="removeFavorite(${index})">Remove</button>
        `;
        favoritesList.appendChild(favoriteItem);
    });
}

function removeFavorite(index) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    showFavorites();
}

function showWeatherChallenges() {
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('five-day-section').classList.add('hidden');
    document.getElementById('custom-forecast-section').classList.add('hidden');
    document.getElementById('favorites-section').classList.add('hidden');
    document.getElementById('weather-challenges-section').classList.remove('hidden');

    const challengesList = document.getElementById('challenges-list');
    challengesList.innerHTML = '';

    challenges = JSON.parse(localStorage.getItem('challenges')) || [];

    challenges.forEach((challenge, index) => {
        const challengeItem = document.createElement('div');
        challengeItem.classList.add('challenge-item');
        challengeItem.innerHTML = `
            <h3>${challenge.title}</h3>
            <p>${challenge.description}</p>
            <button onclick="completeChallenge(${index})">Complete</button>
        `;
        challengesList.appendChild(challengeItem);
    });
}

function createChallenge() {
    const title = prompt("Enter challenge title:");
    const description = prompt("Enter challenge description:");

    if (title && description) {
        const challenge = { title, description };
        challenges.push(challenge);
        localStorage.setItem('challenges', JSON.stringify(challenges));
        showWeatherChallenges();
    }
}

function completeChallenge(index) {
    challenges.splice(index, 1);
    localStorage.setItem('challenges', JSON.stringify(challenges));
    showWeatherChallenges();
    alert("Challenge completed! Great job!");
}

window.onload = function() {
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    challenges = JSON.parse(localStorage.getItem('challenges')) || [];
};