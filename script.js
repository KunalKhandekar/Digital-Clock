setInterval(() => {
    let date = new Date();
    let h = date.getHours() % 12;
    let m = date.getMinutes();
    let s = date.getSeconds();

     
   
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    let hour = document.querySelector(".hours").firstElementChild
    hour.textContent = h;
    let miunte = document.querySelector(".minutes").firstElementChild
    miunte.textContent = m;
    let second = document.querySelector(".seconds").firstElementChild
    second.textContent = s;
    let day_night = document.querySelector(".day_night").firstElementChild
})