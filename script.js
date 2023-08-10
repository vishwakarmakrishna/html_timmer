let endTime;

function setTimer() {
    const endTimeValue = document.getElementById('end-time').value;
    endTime = new Date(endTimeValue).getTime();
    updateDisplay();
}

function updateDisplay() {
    const now = new Date().getTime();
    const distance = endTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    updateCircle('days-circle', days, 365); // Assuming max 365 days
    updateCircle('hours-circle', hours, 24);
    updateCircle('minutes-circle', minutes, 60);
    updateCircle('seconds-circle', seconds, 60);
}

function updateCircle(elementId, value, max) {
    const circle = document.querySelector(`#${elementId} .progress-ring__circle`);
    const circumference = circle.getTotalLength();

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - ((value / max) * circumference);
    circle.style.strokeDashoffset = offset;
}

setInterval(updateDisplay, 1000);
