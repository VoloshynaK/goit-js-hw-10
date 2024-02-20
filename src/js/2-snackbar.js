import "../css/common.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formEl = document.querySelector(".form");
const delayInput = document.querySelector("[name='delay']");
const submitBtn = document.querySelector("button[type='submit']");

formEl.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();
    const formElements = event.currentTarget.elements;

    let delay = Number(delayInput.value);
    let state = formElements.state.value;
    createPromise(delay, state)
        .then(({ delay }) => {
            return iziToast.success({
                title: '',
                message: `Fulfilled promise in ${delay}ms`,
                position: 'topCenter',
            });
        })
    .catch(({ delay }) => {
      return iziToast.error({
            title: '',
            message: `Rejected promise in ${delay}ms`,
            position: 'topCenter',
        });
    })
        .finally(formEl.reset());
}

function createPromise(delay, state) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve({ delay });
            } else {
                reject({ delay });
            }
        }, delay)
    })
}
