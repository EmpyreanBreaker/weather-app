const img = document.querySelector("img");
const button = document.querySelector(".search__button");
const input = document.querySelector(".search__input");

button.addEventListener("click", (e) => {
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
});

const fetchWeather = async (url) => {
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const weather = await response.json();

    console.log(weather);
  } catch (error) {
    console.error(error.message);
  }
};
