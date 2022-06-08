const API_KEY = 'd69cfc7d3bf54713aa2154949220806'
const API_BASE = 'https://api.weatherapi.com/v1/'
const aqi = 'no' // Air quality index
const locationCity = 'Staszow'

async function getWeatherCurrent() {
    const apiURL = `${API_BASE}current.json?key=${API_KEY}&q=${locationCity}&aqi=${aqi}`
    const response = await fetch(apiURL)
    const apiResponceJson = await response.json()
    return apiResponceJson
}


async function main() {
    const weatherJson = await getWeatherCurrent()
    const current = weatherJson.current
    const temp = current.temp_c
    const wind = current.wind_kph
    const clouds = current.cloud
    const humidity = current.humidity

    console.log(humidity,temp,wind,clouds)
    console.log(weatherJson)

    document.getElementById('temperature').innerHTML+temp


}

// const a = {
//     "location": { "name": "Staszow", "region": "", "country": "Poland", "lat": 50.55, "lon": 21.17, "tz_id": "Europe/Warsaw", "localtime_epoch": 1654705098, "localtime": "2022-06-08 18:18" },
//     "current":
//     {
//         "last_updated_epoch": 1654700400,
//         "last_updated": "2022-06-08 17:00",
//         "temp_c": 22.5,
//         "temp_f": 72.5,
//         "is_day": 1,
//         "condition": { "text": "Patchy rain possible", "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png", "code": 1063 },

//         "wind_mph": 3.6,
//         "wind_kph": 5.8,
//         "wind_degree": 32,
//         "wind_dir": "NNE",
//         "pressure_mb": 1009.0,
//         "pressure_in": 29.8,
//         "precip_mm": 1.4,
//         "precip_in": 0.06,
//         "humidity": 75,
//         "cloud": 88,
//         "feelslike_c": 24.8,
//         "feelslike_f": 76.6,
//         "vis_km": 9.0,
//         "vis_miles": 5.0,
//         "uv": 5.0,
//         "gust_mph": 6.9,
//         "gust_kph": 11.2
//     }
// }
main()