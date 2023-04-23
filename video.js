//async and ajax
//what is ASYNC - doing stuff at once.. 6.35pm
//web apis not part pf JS they part of API in the browser 6:38pm - colesole.log(window) in browser of any site.
//EG
setTimeout(() => {
  //this bit here
}, 1000);
//call stack is list on instructions - stack trace list of things that just happened. 6:41pm
//event loop checks que and reinsets stuff into stack
//Task Queues 6:42pm
//this. how to handle chaos etc setTimeout callback 6:50pm
//eg

// this.name = "Colette";

// console.log(this);

// setTimeout(function () {
//   console.log(this);
// }, 500);

/* returns 
Timeout {
  _idleTimeout: 500,
  _idlePrev: null,
  _idleNext: null,
  _idleStart: 26,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 10,
  [Symbol(triggerId)]: 1
}*/

//SO we use this to bind the this to the relevant part
//swap it to a fat arrow function and it makes this
//returns { name: 'Colette' }

// this.name = "Colette";

// console.log("this start");

// setTimeout(() => {
//   console.log("this result of delay");
// }, 500);

// console.log("this end");

//callbacks 6:53pm
//how to deal with chaos - call back

// this.name = "Colette";

// setTimeout(() => {
//   console.log("this start");

//   setTimeout(() => {
//     console.log("this middle");

//     setTimeout(() => {
//       console.log("this end");
//     }, 500);
//   }, 500);
// }, 500);

//this is a problem cos lots of code nesting inside other code gets complicated...
//hence PROMISES 7:00pm special type of object - code that is going to promise to do this in future
//often called .then syntax

// somethingAsync()
//   .then(() => {
//     console.log("I then run");
//   })
//   .then(() => {
//     console.log("I then run");
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("I always run");
//   });

//RESOLVE
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("The Async work complete: here is the answer");
//   }, 2000);
// });

//instead of :
// setInterval(() => {
//   console.log(promise);
// }, 500);

//USE THIS - .then 7:08pm

// promise.then(() => {
//   console.log("The promise was fullfilled");
// });

//what is promis was rejected? Use .catch
//REJECT

//creating a promise
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //resolve("The Async work complete: here is the answer");
    reject("Sorry that did not work");
  }, 2000);
});

//ES6 way of consuming a promise
promise
  .then(() => {
    console.log("The promise was fullfilled");
  })
  .catch((error) => {
    console.log(error);
  });

//ASYNC AWAIT 7:40pm //see asyncawait.js
//AJAX fetch 7:57pm axios was designed for both backend as frontend (now fetch does both too - but only new verisons of NoDE)

//HOMEWORK BIT IS 8:05pm

//prebuilt API data - 8.47pm
