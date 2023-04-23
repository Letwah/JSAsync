///ASYNCAWAIT - or Un_Then_Ing  wait till everything is done then show the result
//newer way of consuming a promise than .then

//async  and await keyword is only thing that has ability to stop it until everything is done
//they are only waiting inside the  function that is marked with async

// console.log(1);

// async function demoAwait() {
//   const resultPromise = await axios.get(
//     "https://thesimpsonsquoteapi.glitch.me/quotes"
//   );
//   const resultPromise2 = await axios.get(
//     "https://thesimpsonsquoteapi.glitch.me/quotes"
//   );
//   const resultPromise3 = await axios.get(
//     "https://thesimpsonsquoteapi.glitch.me/quotes"
//   );
//   console.log(resultPromise, resultPromise2, resultPromise3);
// }

// console.log(2);

// demoAwait();

// console.log(3);

///with try catch logic too

// async function demoAwait() {
//   try {
//     const resultPromise = await axios.get(
//       "https://thesimpsonsquoteapi.glitch.me/quotes"
//     );
//     const resultPromise2 = await axios.get(
//       "https://thesimpsonsquoteapi.glitch.me/quotes"
//     );
//     const resultPromise3 = await axios.get(
//       "https://thesimpsonsquoteapi.glitch.me/quotes"
//     );
//     console.log(resultPromise, resultPromise2, resultPromise3);
//   } catch (error) {
//     console.log(error);
//   }
// }

// demoAwait();

//FAT ARROW VERSION

// const demoAwait = async () => {
//   try {
//     const resultPromise = await axios.get(
//       "https://thesimpsonsquoteapi.glitch.me/quotes"
//     );
//     const resultPromise2 = await axios.get(
//       "https://thesimpsonsquoteapi.glitch.me/quotes"
//     );
//     const resultPromise3 = await axios.get(
//       "https://thesimpsonsquoteapi.glitch.me/quotes"
//     );
//     console.log(resultPromise, resultPromise2, resultPromise3);
//   } catch (error) {
//     console.log(error);
//   }
// };

// demoAwait();

//deconstructing it

const demoAwait = async () => {
  try {
    const { data } = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

demoAwait();
