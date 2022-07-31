let currentTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[date.getDay()];
  let hours = currentTime.getHours();
  let minuts = currentTime.getMinutes();
  if (minuts < 10) {
    minuts = `0${minuts}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let formattedDate = `${currentDay} ${hours}:${minuts}`;
  let timeNow = document.querySelector("#dateTme");
  timeNow.innerHTML = formattedDate;
  console.log(formattedDate);
}
formatDate(currentTime);

function showTemperature(response) {
  let theTemp = document.querySelector("#theTemp");
  let temperature = Math.round(response.data.main.temp);
  theTemp.innerHTML = temperature;
}

function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#cityI");
  let theCity = `${cityInput.value}`;
  let displayInput = document.querySelector("#theCity");
  displayInput.innerHTML = theCity;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${theCity}&appid=39b18d6090a02e4c0d2e4fb1ffb67b36&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let signUpForm = document.querySelector("#cityM");
signUpForm.addEventListener("submit", displayCity);
