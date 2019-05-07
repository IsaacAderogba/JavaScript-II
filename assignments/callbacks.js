// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

getLength(items, function(length) {
  console.log("Q1 Callbacks: " + length);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr.length - 1);
}

last(items, function(lastItem) {
  console.log("Q2 Callbacks: " + lastItem);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  let sum = x + y;
  return cb(sum);
}

sumNums(5, 9, function(theSum) {
  console.log("Q3 Callbacks: " + theSum);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  let result = x * y;
  return cb(result)
}

multiplyNums(10, 3, function(theResult) {
  console.log("Q4 Callbacks: " + theResult);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for(i = 0; i < list.length; i++){
    if(item === list[i]){
      return cb(true);
    }
  }
  return cb(false);
}

contains("Notebook", items, function(booleanValue) {
  console.log("Q5.1 Callbacks: " + booleanValue);
});

contains("Peanuts", items, function(booleanValue) {
  console.log("Q5.2 Callbacks: " + booleanValue);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.

  let newArray = array.map(element => element); // create new array
  let uniqueItems = Array.from(new Set(newArray)); // convert array to set and back to Array
  return cb(uniqueItems);
}

console.log("*** Stretch Challenge ***");
items.push("Pencil"); // duplicate item
console.log(items)
removeDuplicates(items, function(array) {
  console.log(array)
});