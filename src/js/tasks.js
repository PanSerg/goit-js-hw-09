//  * ЗАВДАННЯ 5
//  * Перероби код так, щоб усі дані збиралися
//  * Одночасно і приходили у вигляді масиву


// const getData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 1;
//             console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getNewData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 2;
//             console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getAnotherData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 3;
//             console.log(data);
//             res(data);
//         }, 1000);
//     });

// const getLastData = () =>
//     new Promise((res) => {
//         setTimeout(() => {
//             const data = 4;
//             console.log(data);
//             res(data);
//         }, 1000);
//     });

// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()])
//     .then(value => console.log(value))
//     .catch(error => console.log(error));

//.......

// Напишіть JavaScript, щоб перевірити, чи є день вихідним.
// Приклад введення:
// console.log(is_weekend('Nov 16, 2020'));
// приклад:
// "не вихідний"

// const is_weekend = (date) => {
//     const day = new Date(date).getDay();
//     console.log(day);
//     return [0, 6].includes(day);
//     // if (day === 0 || day === 6) {
//     //     return true;
//     // }
//     // return false;
// }
// console.log(is_weekend('Dec 24, 2022'));


// Module 10
    
// const user = {
//     name: 'Alex',
//     email: "esco@ukr.net"
// }

// const patch = {
//     email: 'brisk@ukr.net'
// }

// const options = {
//     method: "POST",
//     body: JSON.stringify({
//         name: 'Alex',
//         email: "esco@ukr.net"
//     })
  
// }
// fetch(`https://jsonplaceholder.typicode.com/posts`, options)
//     .then(resp => resp.json())
//     .then(data => console.log(data));

// const options = {
//     method: "PATCH",
//     body: JSON.stringify({
//         title : 'Hallo World'
//     })
// }

// fetch(`https://jsonplaceholder.typicode.com/posts/101`, options);