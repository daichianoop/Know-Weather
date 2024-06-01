const apiKey = "9151bd7bde61e326bf003fcd3b10c935";
let weatherData = document.getElementById("weatherData");
let inputCity = document.getElementById("inputCity");
let getWeatherButton = document.getElementById("getWeatherButton");
let descriptionD = document.getElementById("description");
let iconD = document.getElementById("icon");
let temperatureD = document.getElementById("temperature");
let feelsLikeD = document.getElementById("feelsLike");
let humidityD = document.getElementById("humidity");
let windSpeedD = document.getElementById("windSpeed");
let minMaxD = document.getElementById("minMax");

getWeatherButton.addEventListener("click", () => {
  let city = inputCity.value;
  getWeatherData(city);
});

async function getWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("No Response from the servers");
    }
    const data = await response.json();
    console.log(data);
    let temperature = Math.round(data.main.temp);
    let description = data.weather[0].description;
    let icon = data.weather[0].icon;
    let min = Math.round(data.main.temp_min);
    let max = Math.round(data.main.temp_max);
    let details = [
      `${Math.round(data.main.feels_like)}`,
      `${data.main.humidity}%`,
      `${data.wind.speed} m/s`,
    ];
    temperatureD.innerHTML = `${temperature}&deg;C`;
    descriptionD.innerHTML = `${description}`;
    iconD.innerHTML = `          <img
    class="size-24 items-center justify-center"
    src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon"
    alt=""
  />`;
    feelsLikeD.innerHTML = `${details[0]}`;
    humidityD.innerHTML = `${details[1]}`;
    windSpeedD.innerHTML = `${details[2]}`;
    minMaxD.innerHTML = `${min}&deg;/${max}&deg;`;
  } catch (error) {}
}

function user1(){
document.getElementById("mainContainer").innerHTML=`
<div class="text-white"><span class="text-3xl">Congratulations</span> <br>
You have found User1... <br>
It is none other than <span class="text-emerald-600 text-lg">@Anoop2005</span> 
<br>
<img class="py-5" src="https://www.bing.com/th/id/OGC.947fe58f0826631a23b310d4edb5b766?pid=1.7&rurl=https%3a%2f%2fmedia3.giphy.com%2fmedia%2f3o7TKrSnimhF07fIaI%2fsource.gif&ehk=RNNr1uIQquqk3O9geIzFdUAeSDm5z7uUySLiicnsEVA%3d" alt="">
<br>
<a href="index.html"><span class="hover:text-green-500 cursor-pointer animate-pulse text-xl">&leftarrow; Go Back</span></a>
</div>`;
}
