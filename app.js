const title = document.querySelector(".title");
const inputSection = document.querySelector(".input-section");
const input = document.querySelector(".input");
const button = document.querySelector(".submit-btn");
const weather = document.querySelector(".output");

button.addEventListener("click", showWeather);
window.addEventListener("load", () => {
    title.classList.add("title-appear");
    inputSection.classList.add("input-section-appear");
});

function showWeather(){
    const api = "https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&units=metric&appid=8916ec882e494cc4301bfcb4caaa4f26";

    fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const city = document.createElement("h1");
            city.innerText = data.name;
            weather.appendChild(city);

            const { temp } = data.main;
            const temperature = document.createElement("h2");
            temperature.innerText = temp + "°C";
            weather.appendChild(temperature); 
        })
}