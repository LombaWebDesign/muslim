setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);



const targetNumber = 16450500;
const duration = 2000;
const interval = 10;

const counterElement = document.getElementById('counter');

let currentNumber = 0;
const increment = Math.ceil(targetNumber / (duration / interval));

const updateCounter = () => {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(counterInterval);
    }
    counterElement.textContent = currentNumber.toLocaleString();
};

const counterInterval = setInterval(updateCounter, interval);
