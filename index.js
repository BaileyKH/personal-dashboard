
fetch("https://api.unsplash.com/photos/random?client_id=xbACbrn1FK1mgcZIVI9lzv77YiIWGaQvFm9P_oWEi_k&query=nature&orientation=landscape")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
    })