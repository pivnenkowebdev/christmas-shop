const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

const currentYear = new Date().getUTCFullYear();
const nextYearDate = new Date(Date.UTC(currentYear + 1, 0, 1));

const timer = () => {
    const currentTime = Date.now();
    const timeDifference = nextYearDate - currentTime;

    if (timeDifference <= 0) {
        daysElement.textContent = '0';
        hoursElement.textContent = '0';
        minutesElement.textContent = '0';
        secondsElement.textContent = '0';
        return;
    }

    const days = Math.floor(timeDifference / (3600 * 24 * 1000));
    const hours = Math.floor((timeDifference / (3600 * 1000)) % 24);
    const minutes = Math.floor((timeDifference / (60 * 1000)) % 60);
    const seconds = Math.floor((timeDifference / 1000) % 60);

    daysElement.textContent = days;
    hoursElement.textContent = hours.toString().padStart(1, '');
    minutesElement.textContent = minutes.toString().padStart(1, '');
    secondsElement.textContent = seconds.toString().padStart(1, '');
};

timer();
setInterval(() => timer(), 1000);
