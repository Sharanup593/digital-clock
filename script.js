const hourSpan = document.getElementById('hour')
const minSpan = document.getElementById('minute')
const secSpan = document.getElementById('second')
const amorpmSpan = document.getElementById('amorpm')

function changeTime() {
    let d = new Date()
    let hour = d.getHours()
    hourSpan.textContent = String(hour).padStart(2, '0');
    let minute = d.getMinutes()
    minSpan.textContent = String(minute).padStart(2, '0');
    let second = d.getSeconds()
    secSpan.textContent = String(second).padStart(2, '0');
    amorpmSpan.textContent = hour >= 12 ? 'PM' : 'AM';
}

setInterval(() => changeTime(), 1000);