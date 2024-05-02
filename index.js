
// Background Image API
try {
    const res = await fetch("https://api.unsplash.com/photos/random?client_id=xbACbrn1FK1mgcZIVI9lzv77YiIWGaQvFm9P_oWEi_k&query=nature&orientation=landscape")
    const data = await res.json()
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
} catch(err) {
    console.error("Failed to load background image", err)
    document.body.style.backgroundImage = 'url(assets/bu-bg.jpg)'
}

// Crypto API
try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin/?x_cg_demo_api_key=CG-7Pu7f1W17BBd8YEnKYqSQNfi")
    if (!res.ok){
        throw Error("Something went wrong!")
    }
    const data = await res.json()
    document.querySelector(".crypto-container").innerHTML = `
        <div class="${data.name}">
            <img src="${data.image.small}"/>
            <p>${data.name}</p>
            <p>Current: $${data.market_data.current_price.usd}</p>
            <p><i class="fa-solid fa-arrow-up-right-dots" style="color: #ffffff;"></i> $${data.market_data.high_24h.usd}</p>
            <p><i class="fa-solid fa-arrow-down-short-wide" style="color: #ffffff;"></i> $${data.market_data.low_24h.usd}</p>
        </div>`
} catch(err) {
    console.error(err)
}

// Weather API 
navigator.geolocation.getCurrentPosition(async position => {
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=e16ba69011bc75f84cacb14e11c748ee&units=imperial`)
        if (!res.ok){
            throw Error("Could not retrieve weather")
        }
        const data = await res.json()
        const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML = `
            <img src="${weatherIcon}"/>
            <div class="weather-data">
                <h3>${data.name}</h3>
                <p>${data.main.temp.toFixed(0)}°</p>
            </div>
            `
    } catch(err) {
        console.error(err)
    }  
})



function getTime(){
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getTime, 1000)

