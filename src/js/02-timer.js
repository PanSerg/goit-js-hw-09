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
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
    //   console.log(new Date());

      if (selectedDates[0] < new Date()) {
          startBtn.disabled = true;
          window.alert('Please choose a date in the future');
      } else {
          startBtn.disabled = false;
          targetTime = selectedDates[0];
      }
  },
};
 startBtn.addEventListener('cick', () => {
   changeTimerValue(targetTime);
 });

flatpickr(pickrTime, options);

function changeTimerValue(selectedTime) {
  const timer = {
    start() {
      console.log(1, 2, 3);
            startBtn.disabled = true;
            pickrTime.disabled = true;
            const startTime = selectedTime;
            timerId = setInterval(() => {
                const currentTime = Date.now();

                const differenceTime = currentTime - startTime;
                //   const realDifferenceTime = differenceTime * -1;
                //   console.log(realDifferenceTime);
                
                const { days, hours, minutes, seconds } = convertMs(differenceTime);
                console.log(`days = ${days}`);
                daysRef.textContent = days;
                hoursRef.textContent = hours;
                minutesRef.textContent = minutes;
                secondsRef.textContent = seconds;
                //   console.log(days);
                //   console.log(typeof days);
                //   console.log(differenceTime);

                  // if (differenceTime >= 0) {
                  //   clearInterval(timerId);
                  // }
            }, 1000)
        },
    };
    timer.start();
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


