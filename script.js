const API_KEY = 'd69cfc7d3bf54713aa2154949220806'
const API_BASE = 'https://api.weatherapi.com/v1/'
const aqi = 'no' // Air quality index
let locationCityGlobal = 'Staszow'

async function getWeatherCurrent(locationCity) {
    const apiURL = `${API_BASE}current.json?key=${API_KEY}&q=${locationCity}&aqi=${aqi}`
    const response = await fetch(apiURL)
    const apiResponceJson = await response.json()
    return apiResponceJson
}

async function main(locationCity) {
    const weatherJson = await getWeatherCurrent(locationCity)
    const current = weatherJson.current
    const temp = current.temp_c
    const wind = current.wind_kph
    const clouds = current.cloud
    const humidity = current.humidity

    const locationCountry = weatherJson.location
    const country = locationCountry.country
    const localTime = locationCountry.localtime

    document.getElementById('date').innerHTML=localTime

    console.log(humidity,temp,wind,"zachmurzenie: ",clouds,country)
    console.log(weatherJson)

    document.getElementById('temp').innerHTML=temp+"°"
    document.getElementById('wind').innerHTML=wind+"km/h"
    document.getElementById('clouds').innerHTML=clouds+"%"
    document.getElementById('humidity').innerHTML=humidity+"%"

    //document.getElementById('miasto').innerHTML=locationCity


    let icon = 1

    if (clouds>85){
        icon = 4
        document.getElementById('icon').innerHTML="<img src="+icon+".png>"
    }
    if (clouds<85 && clouds>50){
        icon = 3
        document.getElementById('icon').innerHTML="<img src="+icon+".png>"
    }
    if (clouds<50 && clouds>30){
        icon = 2
        document.getElementById('icon').innerHTML="<img src="+icon+".png>"
    }
    if(clouds<30){
        icon = 1
        document.getElementById('icon').innerHTML="<img src="+icon+".png>"
    }

}

function changeCity(){
    let locationCity = document.getElementById('search').value

    if (locationCity==''){
        locationCity='Warszawa'
    }

    document.getElementById('city').innerHTML=locationCity
    locationCityGlobal = locationCity
    main(locationCityGlobal)
    console.log(locationCity)
}

function cityClick(locationCity){
    document.getElementById('city').innerHTML=locationCity
    locationCityGlobal = locationCity
    main(locationCityGlobal)
}

main(locationCityGlobal)


function intervalFunction(){
    main(locationCityGlobal)
}
setInterval(intervalFunction,60*1000)

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
