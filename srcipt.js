console.log("Script Running.............");

// Define the city you want to search
// const city = "Mumbai";  // Replace with any city

// // Use your API key
 const apiKey = "6d9d06ed9137c821b2fcfb4a65583476";

// Build the API URL
let searchBar=document.querySelector(".search input");
let searchButton=document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon");

async function findWeather(city){
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response=await fetch(apiURL);
    if(response.status==404){
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
    }else{

    let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    if(data.weather[0].main=="Clear"){
        weatherIcon.src="icons/images/clear.png";
    }else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="icons/images/clouds.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="icons/images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="icons/images/mist.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="icons/images/rain.png";
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="icons/images/snow.png";
    }else if(data.weather[0].main=="Haze"){
        weatherIcon.src="icons/images/haze.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

}
}

searchButton.addEventListener("click",()=>{
findWeather(searchBar.value);
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
   findWeather(searchBar.value);
  }
});
