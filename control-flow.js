var foods = ["tacos", "burritos", "salad"];
if (foods.length === 0) {
    console.log("You have no food");
}
else if (foods.length === 1) {
    console.log("You have one food");
}
else {
    console.log("You have lots of food");
}

var i = 99;
while (i > 1) {
    console.log(i + " bottles of beer on the wall...");
    i--;
    if (i === 1) {
        console.log(i + " bottle of beer on the wall...");
    }
}


var friends = ["Kaleena", "Alina", "Nancy", "Becca"];
for (x = 0; x <= friends.length - 1; x++){
    console.log("Hello, " + friends[x]);
}

// BONUS

var friends = ["Kaleena", "Alina", "Nancy", "Becca"];
for (x = 0; x <= friends.length - 1; x++){
    console.log(friends[x] + " says Hello, " + friends[x-1]);
}


// var isTasty;

// var food = "fruit";
// // var food = "pizza";
// if (food === "pizza" || food === "tacos") {
//     isTasty = true;
// }
// else {
//     isTasty = false;
// }

// console.log("Is the food tasty?" , isTasty);


// // FIZZ BUZZ
// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }

// // FOR IN LOOP
// // car[thing] refers to the key
// // and thing on its own refers to the key value
// var car = {
//     wheels: 4,
//     doors: 2,
//     mirrors: 2
// };
// for (var thing in car) {
//     console.log("my car has " + car[thing] + " " + thing);
// }

// // PHONEBOOK
// var phoneBook = {
//     "Abe": "111-111-1111",
//     "Bob": "222-222-2222",
//     "Cam": "333-333-3333",
//     "Dan": "444-444-4444",
//     "Ern": "555-555-5555",
//     "Fry": "111-111-1111",
//     "Gil": "222-222-2222",
//     "Hal": "333-333-3333",
//     "Ike": "444-444-4444",
//     "Jim": "555-555-5555",
//     "Kip": "111-111-1111",
//     "Liv": "222-222-2222",
//     "Mia": "333-333-3333",
//     "Nik": "444-444-4444",
//     "Oli": "555-555-5555",
//     "Pam": "111-111-1111",
//     "Qiq": "222-222-2222",
//     "Rob": "333-333-3333",
//     "Stu": "444-444-4444",
//     "Tad": "555-555-5555",
//     "Uwe": "111-111-1111",
//     "Val": "222-222-2222",
//     "Wil": "333-333-3333",
//     "Xiu": "444-444-4444",
//     "Yam": "555-555-5555",
//     "Zed": "111-111-1111"
// };
// for (var common in phoneBook) {
//     if (phoneBook[common] === "333-333-3333") {
//         console.log(common);
//     }
// }

