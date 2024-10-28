function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector ("#description");
  let humidityElement = document.querySelector ("#humidity");
  let chillElement = document.querySelector("#chill");
  let timeElement = document.querySelector ("#time");
  let iconElement = document.querySelector ("#icon");

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate (date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}`;
  chillElement.innerHTML = `${response.data.chill}`;
  temperatureElement.innerHTML = Math.round(temperature);
}

function formatDate (date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days [date.getDay()];
    if (minutes < 10 ) {
        minutes = `0 ${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "7a8aacadf32fc08tff87b375486o409c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Milwaukee");
