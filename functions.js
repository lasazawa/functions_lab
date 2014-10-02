var hello = function(){
    console.log("Hello, World!");
};
hello();



var greeting = function(name) {
    console.log("Hello, " + name);
};
greeting("Lauren");


var sayHello = function(name) {
    return("Hello, " + name);
};
var greetMe = sayHello("Anna");
console.log(greetMe);


// FOUR
var add = function(x, y) {
    return x + y;
};
var sub = function(x, y) {
    return x - y;
};

var combine = function(x, y, bool){
    if (bool === true) {
        return add(x, y);
    }
    else {
        return add(x, y);
    }
};
console.log(combine(8, 4, false));
console.log(combine(13, 2, true));

// FIVE
var animal = function (x) {
    return x*x;
};

console.log(animal(4));
console.log(animal(2));
console.log(animal(12));



// BONUS 1
var prime = function(x) {
    if (x <=3 ) {
        return true;
    }
    else {
        for (i = 2; i <= Math.sqrt(x); i++){
        if (x % i === 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
};

isPrime = console.log(prime(1031));
isPrime = console.log(prime(271));
isPrime = console.log(prime(3));
isPrime = console.log(prime(22));
isPrime = console.log(prime(81));
isPrime = console.log(prime(5));



// // BONUS 2
// var arr1 = [3,6,11];
// var arr2 = [2,4,5,8,9];
// var merge = arr1.concat(arr2);

// console.log(merge);

// var sorted = merge.sort(function(a, b){
//     return a - b;
// });
// console.log(sorted);

// // BONUS 3
// var letterCount = function(a, b) {

// };

