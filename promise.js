//axios has promises built in

// const start = Date.now();
// const result = axios.get("https://thesimpsonsquoteapi.glitch.me/quotes");

// console.log("when do i run? ");

// result
//   .then((result) => {
//     console.log(result);
//     console.log(Date.now() - start);
//   })
//   .catch((error) => {
//     console.log("It failed because:..", error);
//   });

//Promises Static Methods

const start = Date.now();
const promise1 = axios.get("https://thesimpsonsquoteapi.glitch.me/quotes");
const promise2 = axios.get("https://thesimpsonsquoteapi.glitch.me/quotes");
const promise3 = axios.get("https://thesimpsonsquoteapi.glitch.me/quotes");

console.log("when do i run? ");

Promise.all([promise1, promise2, promise3]).then((result) => {
  console.log("It worked");
});
