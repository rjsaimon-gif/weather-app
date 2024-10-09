let weather = {
  name: "Paris",
  temperature: 61,
  humidity: 80,
};

let city = prompt("Enter a city");
if (city === "Paris") {
  alert(
    `It is currently ${temperature}°F in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we do not know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}

let p = document.querySelector("#timing");
p.classList.replace("Thursday 6:50AM");

//When searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
function searchCity(event) {
  event.preventDefault();
  console.log(`${cityInput.value}`);
}

let searchButton = document.querySelector("button");
searchButton.addEventListener("submit", searchCity);
