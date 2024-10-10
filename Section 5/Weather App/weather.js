const key = "ef62f1f3478b62403a50c4edb64f239e";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector('.search input');
const btn = document.querySelector('.search button');
const icon = document.querySelector('.icon')

async function checkWeather(city) {


    const response = await fetch(url + city + `appid=${key}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp.toFixed(1) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";

    let condition = data.weather[0].main.toLowerCase();
    switch (condition) {
        case 'clouds':
            icon.src = 'images/clouds.png';
            break;
        case 'clear':
            icon.src = 'images/clear.png';
            break;
        case 'rain':
            icon.src = 'images/rain.png';
            break;
        case 'smoke':
            icon.src = 'images/smoke.png';
            break;
        case 'snow':
            icon.src = 'images/snow.png';
            break;
        case 'fog':
            icon.src = 'images/fog.png';
            break;
        case 'drizzle':
            icon.src = 'images/drizzle.png';
            break;
        case 'mist':
            icon.src = 'images/mist.png';
            break;
        default:
            icon.src = 'images/tem.png';

    }
    document.querySelector('.weather').style.display = "block";
    console.log("Weather Condition", data.weather[0].main);

}
btn.addEventListener('click', () => {
    checkWeather(search.value);
})