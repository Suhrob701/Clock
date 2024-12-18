function update (){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Ekranga soat, minut, va sekundni chiqaramiz
    document.getElementById("hourValue").textContent = ('0' + hours).slice(-2);
    document.getElementById("minuteValue").textContent = ('0' + minutes).slice(-2);
    document.getElementById("secondValue").textContent = ('0' + seconds).slice(-2);
}

setInterval(update, 1000);