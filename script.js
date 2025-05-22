"use strict";

// Define city data with image and name
const cityData = [
  { name: "Toronto", image: "images/canada.jpg" },
  { name: "Manila", image: "images/philip.jpg" },
  { name: "Tokyo", image: "images/japan.jpg" },
  { name: "Seoul", image: "images/korea.jpg" },
  { name: "Mexico City", image: "images/mexico.jpg" },
  { name: "Batangas", image: "images/batangas.jpg" }

];

let index = 0;
const blob = document.querySelector("main .iinfo-container");
const cityInput = document.querySelector("#get-city");

// Weather display elements
const cityName = document.querySelector(".city-name");
const cityTemp = document.querySelector(".weather-deg");
const cityCond = document.querySelector(".weather-condition");
const cityHumidity = document.querySelector(".humidity");
const todayDate = document.querySelector(".date");

// Weather API config
const apiData = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "124b92a8dd9ec01ffb0dbf64bc44af3c"
};

// Load initial city weather
loadCityWeather(cityData[index].name);

// Automatically cycle background and city weather
setInterval(() => {
  index = (index + 1) % cityData.length;
  const currentCity = cityData[index];
  if (blob) {
    blob.style.backgroundImage = `url(${currentCity.image})`;
  }
  loadCityWeather(currentCity.name);
}, 4000);

// Handle user input on Enter key
cityInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    loadCityWeather(cityInput.value.trim());
    cityInput.value = "";
  }
});

// Fetch weather from API
async function loadCityWeather(city) {
  try {
    const response = await fetch(`${apiData.url}${city}&appid=${apiData.key}`);
    const data = await response.json();

    if (data.cod !== 200) {
      cityName.innerHTML = `City not found`;
      cityTemp.innerHTML = `--`;
      cityCond.innerHTML = `--`;
      cityHumidity.innerHTML = `--`;
      return;
    }

    updateWeatherDOM(data);
  } catch (error) {
    console.error("Weather API error:", error);
    cityName.innerHTML = `Error fetching data`;
  }
}

// Update weather info in DOM
function updateWeatherDOM(data) {
  cityName.innerHTML = `${data.name}, ${data.sys.country}`;
  cityTemp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
  cityCond.innerHTML = data.weather[0].description;
  cityHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  todayDate.innerHTML = getFormattedDate();
}

// Date helper
function getFormattedDate() {
  const now = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}
