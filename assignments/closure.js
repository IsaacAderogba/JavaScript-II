// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function whoLikesIceCream(yourName) {
  const name = yourName;
  function likesIceCream() {
    console.log(`${name} likes ice-cream`)
  }
  likesIceCream();
}

whoLikesIceCream("Isaac");

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return ++count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 0;

  return ({
    "increment": () => ++count,
    "decrement": () => --count
  })
};

const newCounterFactory = counterFactory();
console.log("incremented, now: " + newCounterFactory.increment());
console.log("incremented, now: " +newCounterFactory.increment());
console.log("decremented, now: " +newCounterFactory.decrement());
console.log("incremented, now: " +newCounterFactory.increment());
console.log("incremented, now: " + newCounterFactory.increment());
console.log("incremented, now: " +newCounterFactory.increment());
console.log("decremented, now: " +newCounterFactory.decrement());
console.log("incremented, now: " +newCounterFactory.increment());

