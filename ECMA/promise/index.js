/**
 * * Basic
 */
// const getSomeData = new Promise((resolve, reject) => {
//   const num = Math.random() > 0.5 ? true : false;

//   if (num) {
//     resolve("success");
//   }

//   reject("fail");
// });

// getSomeData
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// ! -------------------------------------------

/**
 * * Promise return chain
 */

// const getSomeData = new Promise((resolve, reject) => {
//   const num = Math.floor(Math.random() * 10);

//   if (num > 0) {
//     resolve(num);
//   }

//   reject("fail");
// });

// getSomeData
//   .then((data) => {
//     return data + 10;
//   })
//   .then((data) => {
//     console.log(data);
//   });

// ! -------------------------------------------

/**
 * * Promise with parameter
 */

const getSomeData = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 0) {
      resolve(`${num} > 0`);
    } else {
      reject(`0 > ${num}`);
    }
  });
};

getSomeData(1)
  .then((data) => {
    console.log(data);
    return getSomeData(3);
  })
  .then((data) => {
    console.log(data);
    return getSomeData(-1);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("done"));
