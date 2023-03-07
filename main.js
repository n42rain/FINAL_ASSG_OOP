
function getWeather() {
    var city = document.getElementById("city").value;
    var apiKey = "9fd7a449d055dba26a982a3220f32aa2";
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},Ireland&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = `
                <div class="weather-data">
                <h2>${data.name}, ${data.sys.country}</h2>
                <br>
                <p><i class="fa-solid fa-cloud fa-2xl"></i>&nbsp&nbsp&nbspSky with ${data.weather[0].description}</p>
                <p>&nbsp<i class="fa-solid fa-temperature-half fa-2xl"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTemperature : ${Math.round(data.main.temp - 273.15)}°C</p>
                <p><i class="fa-solid fa-wind fa-2xl"></i>&nbsp&nbsp&nbsp&nbsp&nbspWind speed : ${data.wind.speed} m/s</p>
                <p><i class="fa-solid fa-droplet fa-2xl"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspHumidity : ${data.main.humidity}%</p>
                <p>&nbsp&nbsp<i class="fa-solid fa-exclamation fa-2xl"></i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPressure: ${data.main.pressure} hPa</p>
                </div>
            `;
            document.getElementById("weather").innerHTML = weatherData;
            
            
        })
        .catch(error => console.error(error));
}

function gotoMealSection(){
    window.location.href = "meal.html"
}

function gotoIndexSection(){
    window.location.href = "index.html"
}

function gotoWeatherSection(){
    window.location.href = "weather.html"
}

function getMeal(){
    var meal = document.getElementById("meal").value;
    var apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const MealData = `
                
                <div class="meal-name">
                <h2>${data.meals[0].strMeal}, ${data.meals[0].strArea}</h2>
                </div>
                <div class="meal">
                <p>Ingredients needed : </p>
                <p>1.&nbsp&nbsp&nbsp&nbsp&nbsp${data.meals[0].strMeasure1} ${data.meals[0].strIngredient1}</p>
                <p>2.&nbsp&nbsp&nbsp&nbsp&nbsp${data.meals[0].strMeasure2} ${data.meals[0].strIngredient2}</p>
                <p>3.&nbsp&nbsp&nbsp&nbsp&nbsp${data.meals[0].strMeasure3} ${data.meals[0].strIngredient3}</p>
                <p>4.&nbsp&nbsp&nbsp&nbsp&nbsp${data.meals[0].strMeasure4} ${data.meals[0].strIngredient4}</p>
                <p>5.&nbsp&nbsp&nbsp&nbsp&nbsp${data.meals[0].strMeasure5} ${data.meals[0].strIngredient5}</p>
                <p>For more info, explore this link : <a href='${data.meals[0].strYoutube}'>${data.meals[0].strYoutube}</a></p>
                <p>Data respectively taken from this site : <a href='${data.meals[0].strSource}'>${data.meals[0].strSource}</a></p>
                </div>
                <div class="steps">
                <p>Steps : </p>
                <p>${data.meals[0].strInstructions}</p>
                </div>
        
            `;
            var urlpic = data.meals[0].strMealThumb;
            console.log(urlpic)
            document.getElementById("meal-pic").src = urlpic;
            document.getElementById("mealdata").innerHTML = MealData;  
        })
        .catch(error => console.error(error));
}

