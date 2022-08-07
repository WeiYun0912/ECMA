/**
 * * Promise all
 */

// const getSomeData = (num, time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 0) {
//         resolve(`${num} > 0`);
//       } else {
//         reject(`0 > ${num}`);
//       }
//     }, time);
//   });
// };

// Promise.all([getSomeData(2, 2000), getSomeData(1)]).then((data) => {
//   console.log(data);
// });

// const getAPIData = async (url) => {
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => data);
// };

// Promise.all([
//   getAPIData("https://randomuser.me/api/"),
//   getAPIData("https://jsonplaceholder.typicode.com/posts"),
// ]).then((data) => console.log(data));

/**
 * * Promise race
 */

// const getSomeData = (num, time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 0) {
//         resolve(`${num} > 0`);
//       } else {
//         reject(`0 > ${num}`);
//       }
//     }, time);
//   });
// };

// Promise.race([getSomeData(2, 2000), getSomeData(1, 1000)]).then((data) => {
//   console.log(data);
// });
