const API_KEY = "b03a2cfad336d11bd9140ffd92074504";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const cityInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const locationBtn = document.getElementById("location-btn");
const locationElement = document.getElementById("location");
const dateElement = document.getElementById("date");
const tempElement = document.getElementById("temp");
const conditionsElement = document.getElementById("conditions");
const weatherIcon = document.getElementById("weather-icon");
const feelsLikeElement = document.getElementById("feels-like");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");
const forecastElement = document.getElementById("forecast");
const loadingElement = document.getElementById("loading");

document.addEventListener("DOMContentLoaded", () => {
    getLocationWeather();
});

searchBtn.addEventListener("click", () => {
    const city = cityInput.ariaValueMax.trim();
    if (city) {
        getWeatherByCity(city);
    }
});

locationBtn.addEventListener("click", getLocationWeather);

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const city = cityInput.ariaValueMax.trim();
        if (city) {
            getWeatherByCity(city);
        }
    }
});

function showLoading() {
    loadingElement.style.display = "flex";
}

function hideLoading() {
    loadingElement.style.display = "none";
}
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    dateElement.textContent = now.toLocaleDateString("en-US", options);
}

async function getWeatherByCity(city) {
    showLoading();
    try {
        const currentResponse = await fetch (
            `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        const currentData = await currentResponse.json();

        if (currentData.cod !== 200) {
            throw new Error(currentData.message);
        }
        const forecastResponce = await fetch(
            `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        const forecastData = await forecastResponce.json();

        updateWeatherUI(currentData, forecastData);
    }

    catch (error) {
        alert(`Error: ${error.message}`);
        hideLoading();
    }
}

async function getLocationWeather() {
    showLoading();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (positions) => {
                const { latitude, longitude } = positions.coords;
                try {
                    const currentResponse = await fetch(
                        `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
                    );
                    
                    const currentData = await currentResponse.json();

                    const forecastResponce = await fetch(
                        `${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
                    );

                    const forecastData = await forecastResponce.json();

                    updateWeatherUI(currentData, forecastData);
                }

                catch (error) {
                    alert(`Error: ${error.message}`);
                    hideLoading();
                }
            },

(error) => {
    if (error.code === error.PERMISSION_DENIED) {
        locationElement.textContent = "";
        dateElement.textContent = "";
        tempElement.textContent = "";
        conditionsElement.textContent = "";
        weatherIcon.src = "";
        weatherIcon.alt = "";
        feelsLikeElement.textContent = "";
        humidityElement.textContent = "";
        windElement.textContent = "";
        forecastElement.innerHTML = "";

        const errorHtml = `
            <div style="text-align: center; margin-top: 50px;">
                <h2 style="color: #e74c3c; font-size: 4em;">404</h2>
                <p style="font-size: 1.5em; color: #555;">Location Not Found</p>
                <p style="font-size: 1em; color: #777;">Please allow access to geolocation.</p>
            </div>
        `;
        forecastElement.innerHTML = errorHtml;
        
        hideLoading();
    } else {
        alert(`Geolocation error: ${error.message}`);
        getWeatherByCity("Kryvyi Rih"); 
    }
});

function updateWeatherUI(currentData, forecastData) {
    locationElement.textContent = `${currentData.name}, ${currentData.sys.country}`;
    updateDateTime();
    tempElement.textContent = `${Math.round(currentData.main.temp)}°C`;
    conditionsElement.textContent = currentData.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`;
    weatherIcon.alt = currentData.weather[0].main;

    feelsLikeElement.textContent = `Feels like: ${Math.round(currentData.main.feels_like)}°C`;
    humidityElement.textContent = `Humidity: ${currentData.main.humidity}%`;
    windElement.textContent = `Wind: ${Math.round(currentData.wind.speed * 3.6)} km/h`;
    updateForecast(forecastData);
    hideLoading();
}

function updateForecast(forecastData) {
    const dailyForecast = {};
    forecastData.list.forEach((item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString();
        if (!dailyForecast[date]) {
            dailyForecast[date] = [];
        }

        dailyForecast[date].push(item);
    });

    const forecastDays = Object.keys(dailyForecast).slice(1, 6);

    forecastElement.innerHTML = "";
    
    forecastDays.forEach((day) => {
        const dayData = dailyForecast[day];
        const dayName = new Date(day).toLocaleDateString("en-US", { weekday: "short",});
        const dayTemp = dayData.reduce((acc, curr) => acc + curr.main.temp, 0) / dayData.length;
        const dayHigh = Math.max(...dayData.map((item) => item.main.temp_max));
        const dayLow = Math.min(...dayData.map((item) => item.main.temp_min));
        const dayIcon = dayData[Math.floor(dayData.length / 2)].weather[0].icon;

        const forecastItem = document.createElement("div");
        forecastItem.className = "forecast-item";
        forecastItem.innerHTML = `
        <div class="forecast-day">${dayName}</div>
        <div class="forecast-icon">
        <img src="https://openweathermap.org/img/wn/${dayIcon}@2x.png" alt="${dayData[0].weather[0].main}">
        </div>
        <div class="forecast-temp">
        <span class="forecast-high">${Math.round(dayHigh)} </span>
        <span class="forecast-low">${Math.round(dayLow)} </span>
        </div>`;

        forecastElement.appendChild(forecastItem);
        });
    }
    }
}
