import { location } from "../../model/location.js";
import { condition } from "../../model/condition.js";
import "../../css/fonts.css";
import "../../css/style.css";

const locationModel = location();
const conditionModel = condition();

const img = document.querySelector("img");
const button = document.querySelector(".search__button");
const input = document.querySelector(".search__input");

const performSearch = () => {
  const value = input.value.trim().toLowerCase();
  const encodedValue = encodeURIComponent(value);

  if (!value) {
    return;
  }

  const urlBase = "http://api.weatherapi.com/v1/forecast.json";

  const location = encodedValue;

  const unitGroup = "us";

  const apiKey = "40ce670e12b449a3b95215452261105";

  const contentType = "json";

  const url = `${urlBase}?key=${apiKey}&q=${location}`;

  fetchWeather(url);

  input.value = "";
};

button.addEventListener("click", performSearch);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

const fetchWeather = async (url) => {
  try {
    const response = await fetch(url, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const weather = await response.json();

    // Populate location model
    locationModel.create(weather.location.country, weather.location.name, weather.location.region);

    // Populate condition model
    conditionModel.create(
      weather.current.condition.text,
      weather.current.feelslike_f,
      weather.current.humidity,
      weather.current.condition.icon,
      weather.current.temp_f,
      weather.current.wind_mph,
    );

    // Display data on screen
    displayWeather();
  } catch (error) {
    console.error(error.message);
  }
};

const displayWeather = () => {
  // Display location info
  document.querySelector(".location-info").classList.add("active");
  document.querySelector(".location__name").textContent = locationModel.getName();
  document.querySelector(".location__region").textContent = locationModel.getRegion();
  document.querySelector(".location__country").textContent = locationModel.getCountry();

  // Display weather info
  document.querySelector(".weather-info").classList.add("active");
  document.querySelector(".weather__icon").src = conditionModel.getIcon();
  document.querySelector(".weather__condition").textContent = conditionModel.getCondition();
  document.querySelector(".weather__temp").textContent = conditionModel.getTemp();
  document.querySelector(".weather__feelslike").textContent = `FEELS LIKE: ${conditionModel.getFeelslike()}°`;
  document.querySelector(".weather__wind").textContent = `WIND: ${conditionModel.getWind()} MPH`;
  document.querySelector(".weather__humidity").textContent = `HUMIDITY: ${conditionModel.getHumidity()}%`;
};
