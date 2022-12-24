import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button[data-start]');
const pickrTime = document.querySelector('#datetime-picker');
startBtn.disabled = true;

const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

let timerId = null;
let targetTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    const result = new Date(selectedDates).getTime() < Date.now();
    startBtn.disabled = result;
    if (result) {
      alert('Please choose a date in the future');
    }
    targetTime = selectedDates;
  },
};

flatpickr(pickrTime, options);

const timer = {
  start() {
    startBtn.disabled = true;
    pickrTime.disabled = true;

    const timerId = setInterval(() => {
      const differenceTime = targetTime - Date.now();

      const date = convertMs(differenceTime);
      updateTimer(date);
      if (differenceTime < 1000) {
        clearInterval(timerId);
      }
    }, 1000);
  },
};
startBtn.addEventListener('click', timer.start);

function updateTimer({ days, hours, minutes, seconds }) {
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minutesRef.textContent = minutes;
  secondsRef.textContent = seconds;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
