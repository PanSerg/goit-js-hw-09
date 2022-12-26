import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  useIcon: false,
});

const form = document.querySelector('form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { amount, delay, step } = event.target;

  let firstDelay = Number(delay.value);
  let delayStep = Number(step.value);
  let amountValue = Number(amount.value);

  for (let i = 1; i < amountValue; i++) {
    createPromise(i, firstDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
      });
    firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

 