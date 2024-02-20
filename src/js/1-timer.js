import "../css/common.css";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// import Notiflix, { Notify } from "notiflix";
// Notiflix.Notify.init({position: "center-top"});
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const dateInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysVal = document.querySelector("span[data-days]");
const hoursVal = document.querySelector("span[data-hours]");
const minutesVal = document.querySelector("span[data-minutes]");
const secondsVal = document.querySelector("span[data-seconds]");

let timerIsActive = false;
startBtn.disabled = true;
dateInput.disabled = false;

const fp = flatpickr(dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const timeDif = selectedDates[0].getTime() - new Date().getTime();
    if (timeDif > 0 && !timerIsActive) {
        startBtn.disabled = false;
        startBtn.addEventListener("click", () => {
            onStartBtn(timeDif);
            timerIsActive = true;
            startBtn.disabled = true;
            dateInput.disabled = true;
        });
    } else {
        iziToast.error({
            title: 'Error',
            message: 'Please choose a date in the future!',
            position: 'topCenter',
        });
    };
      
  },
});

function onStartBtn(milliseconds) {
    const intervalId = setInterval(() => {
        if (milliseconds > 0) {
            changeTextContent(convertMs(milliseconds));
            milliseconds -= 1000;
        } else {
            clearInterval(intervalId);
        }
    }, 1000);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

function changeTextContent({days, hours, minutes, seconds}) {
    daysVal.textContent = addLeadingZero(days);
    hoursVal.textContent = addLeadingZero(hours);
    minutesVal.textContent = addLeadingZero(minutes);
    secondsVal.textContent = addLeadingZero(seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}