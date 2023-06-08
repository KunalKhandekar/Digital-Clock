setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let am_pm = (h >= 12)? "PM": "AM";

    h %= 12;

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
    day_night.textContent = am_pm;
})