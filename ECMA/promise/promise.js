// basic

// const getSomeData = new Promise((resolve, reject) => {
//   const status = Math.random() > 0.5 ? true : false;

//   if (status) {
//     resolve("success");
//   }

//   reject("fail");
// });

// getSomeData
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// Promise with parameter

// Promise return的值 會給下一個then去接
const getSomeData = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve(number);
    }

    reject("fail");
  });
};

getSomeData(10)
  .then((data) => {
    return getSomeData(-10);
  })
  .catch((data) => {
    return getSomeData(50);
  })
  .then((data) => {
    console.log(data);
  });

// Promise.all .race

// const getAPIData = async (url) => {
//   return fetch(url)
//     .then((res) => res.json())
//     .then((data) => data);
// };

// Promise.all([
//   getAPIData("https://randomuser.me/api/"),
//   getAPIData("https://jsonplaceholder.typicode.com/posts"),
// ]).then((data) => console.log(data));

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

// Promise.race([
//   getSomeData(10, 1000),
//   getSomeData(5, 500),
//   getSomeData(20, 2000),
// ]).then((data) => console.log(data));
