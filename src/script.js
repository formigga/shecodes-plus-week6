let dateElement = document.querySelector("#date");

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let dayIndex = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sunday",
];

dateElement.innerHTML = `${days[dayIndex]} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#exampleDataList");
  let city = document.querySelector("#city");
  city.innerHTML = cityElement.value;
}

let searchForm = document.querySelector("#searchButton");

searchForm.addEventListener("click", search);
