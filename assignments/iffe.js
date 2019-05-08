// function that returns as soon as it is defined

// approach 1 
(function () {
    console.log("My favourite number is 27");
})();

// approach 2 - see last three paranetheses
(function () {
    console.log("My favourite number is 17");
}());



(favNumber = function (num = 7) {
    console.log("My favourite number is " + num);
    return num;
})();

let favNum = favNumber(37);

console.log(favNum);



let a = 2;
(function() {
    let a = 3;
    console.log(a); // uses a from within function
})();

console.log(a);

