const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

const form = document.getElementById("form");
const search = document.getElementById("search");
const weather = document.getElementById("weather");

const getWeather = async (city) => {
  weather.innerHTML = `<h2> Loading... <h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  return showWeather(data);
};

function showWeather(data) {
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City Not Found <h2>`;
  }
  weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h4> ${data.weather[0].main} </h4>
    </div>
    `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  getWeather(search.value);

  search.value = "";
});
