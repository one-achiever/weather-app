function refreshWeather(response){
 let temperatureElement = document.querySelector("#temperature-degree");
 let temperature = response.data.temperature.current;      
 let cityElement = document.querySelector("#city");         
 cityElement.innerHTML = response.data.city;

 temperatureElement.innerHTML = Math.round(temperature);         

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
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",handleSubmit);

findCity("Paris");