let countDate = new Date('dec, 2022 00:00:00').getTime();

function countDown() { 
    let now = new Date().getTime();
    gap = now - countDate;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let day = hours * 24;

    let d = Math.abs(Math.floor(gap / (day)));
    let h = Math.abs(Math.floor((gap % (day)) / (hours)));
    let m = Math.abs(Math.floor((gap % (hours)) / (minutes)));
    let s = Math.abs(Math.floor((gap % (minutes)) / (seconds)));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function () {
    countDown()
}, 1000);