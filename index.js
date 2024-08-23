function refreshWeather(response){
 let temperatureElement = document.querySelector("#temperature-degree");
 let temperature = response.data.temperature.current;      
 let cityElement = document.querySelector("#city");  
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity");
 let windElement = document.querySelector("#wind");
 let timeElement = document.querySelector("#time");
 let date = new Date(response.data.time * 1000);

 timeElement.innerHTML =  formatDate(date);
 windElement.innerHTML = `${response.data.wind.speed}km/h`;
 humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
 cityElement.innerHTML = response.data.city;
 descriptionElement.innerHTML = response.data.condition.description;
 temperatureElement.innerHTML = Math.round(temperature);         

}
function formatDate(date){
 
 let minutes = date.getMinutes();
 let hours = date.getHours();
 let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

 let day = days[date.getDay()];
 if (minutes < 10){
     minutes = `0${minutes}`;
 }

 return `${day} ${hours}:${minutes}`;

}
function findCity(city){
    let apiKey = "38ec6o734t61630a022f3b6268c8e219";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiUrl).then(refreshWeather);


}
function handleSubmit(event){
         event.preventDefault();
         let textInput = document.querySelector("#text-input");
         findCity(textInput.value);
}
function displayForecast(){


let days = ["Tue","Wed","Thur","Fri","Sat"];

let forecastHtml = "";
days.forEach(function(day){
    forecastHtml =
     forecastHtml + 
    ` 
        <div class="weather-forecast-day">
            <div  class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-emoji">⛅</div>
            <div class="weather-forecast-temperatures">
                <div class="weather-forecast-temperature">18°C</div>
                <div class="weather-forecast-temperature">9°C</div>
            </div>
        </div> 
        `;
});

  forecastElement.innerHTML = forecastHtml;
}
let forecastElement = document.querySelector("#forecast");

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",handleSubmit);
                
findCity("Paris");
displayForecast();