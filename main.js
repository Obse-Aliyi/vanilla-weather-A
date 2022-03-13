




function formatDate(timestamp){
    let date= new Date(timestamp);
    let days= ["Sun","Mon", "Tues","Wed", "Thru", "Fri", "Sat"];
    let day = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${day}, ${hours}: ${minutes} pm`;
}

function displayTemperature(response){
    document.querySelector(".temp").innerHTML =Math.round(response.data.main.temp);
    document.querySelector(".city").innerHTML = response.data.name;
    document.querySelector(".description").innerHTML = response.data.weather[0].description;
    document.querySelector(".humidity").innerHTML = response.data.main.humidity;
    document.querySelector(".wind").innerHTML = Math.round(response.data.wind.speed);
    document.querySelector(".date").innerHTML = formatDate(response.data.dt *1000);
    let iconElement = document.querySelector(".icon");
    iconElement.setAttribute("src", 
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`);
    
}

function search(city){
     let apiKey ="1ed27858cc58c0b5dc29f2d3e7adefb1"
     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(displayTemperature);
 }



 function changeCity(event){
     event.preventDefault();
    let searchBarElement = document.querySelector(".search-bar");
    search(searchBarElement.value);


 }

 
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);

 search("Edmonton,AB");









 