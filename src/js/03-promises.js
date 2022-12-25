const container = document.querySelector('.form');

const delayRef = document.querySelector('.delay');
const stepRef = document.querySelector('.step');
const amountRef = document.querySelector('.amount');
const start = document.querySelector('[type="submit"]');

start.addEventListener('click', onClick);

function onClick() {
  for (let i = 0; i < container.children.length; i += 1) {
     createPromise(position, delay, i * 500).then(position =>
       console.log(position)
     );
   }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

 
  setTimeout(() => {
    if (shouldResolve) {
      position('Промис выполнен');
    } else {
      delay('Промис выпиолнен с ошибкой');
    }
  }, delay);
  return shouldResolve;
};

  console.log(createPromise);
