"use strict";

// alert, prompt and confirm

// let age1 = prompt("Enter your age?");  // It will give an alert and ask you for your age.
// alert(`Your are ${age1} years old.`);  // It will give an alert and tell you your age after entering it.
// console.log(typeof(age1));  // It will tell us the type of age which user entered.  (String usually)

// let x = confirm("Are you sure?");  // It will give you an alert and ask you if you are sure press ok to true or cancel to false.
// console.log(x);

// let age2 = prompt("What is your age?",2); // here, 2 is default value. Like this we can pass any default value or statement.

// Comparison Operations

// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == equality
// != not equal
// === strict equality
// !== strict non equality

console.log(10==10); // obviously this will be true.
console.log(10!=10); // obviously this will be false.
console.log("10"==10);  // this should be false but this is come out to be true. So, it's an error in JS. To correct this we will use strict equality.
console.log("10"!=10);  // this should be true but this is come out to be false. So, it's an error in JS. To correct this we will use strict equality.

console.log("10"===10);  // now this is correct.
console.log("10"!==10);  // now this is also correct.

// In Js, 99% of the time we use strict equality and strict non. equality only.

// If Else and or not Statements


// and == &&
// or == ||
// not == !

let age = 13;

if (age >= 18) {
    console.log("You are good to go!");
} else if (age < 15) {
    console.log("What are you even doing here?");
} else {
    console.log("Wait a bit longer...");
}

const dice1 = 6;
const dice2 = 3;

if (dice1 === 4 && dice2 === 3) { // To check equality we have to use trilple = signs.
    console.log("You won!");          // && means and.
} else {
    console.log("Soryy! You lost.")
}

if (dice1 === 6 || dice2 === 1) { // This || sign means or.
    console.log("You won!");
} else {
    console.log("Sorry! you lost.");
}

let name = "wasif";  // Truthy value, we have given it a name. So, If block will run.

if(name){
    console.log(`Your name is ${name}`);
}else{
    console.log(`Pls! Enter a name.`);
}

let name1 = "";  // Falsy value, we haven't given it a name. So, else block will run.

if(name1){
    console.log(`Your name is ${name1}`);
}else{
    console.log(`Pls! Enter a name.`);
}

// Falsy values = false, undefined, "", NaN, null

// Nested if else statement. (Number gussing game)

let winningNumber = 17;

let num = parseInt(prompt("Enter a no. b/w 1 to 20!"));

if(num === winningNumber){
    console.log("you guessed it right! You won.");    
}else{
    if(num<winningNumber){
        console.log("Too small!!!");
    }else{
        console.log("Too high!!!!!!");
    }
}

// else if

let temp = 35;

if(temp <= -90){
    console.log("Are you an Alien! What is your planet name?");
}else if(temp <= 0){
    console.log("It's very cold outside.");
}else if(temp <= 20){
    console.log("It's cold outside.");
}else if(temp <= 30){
    console.log("It's a pleasant weather outside.");
}else if(temp <= 40){
    console.log("Go for swimming.");
}else if(temp <= 50){
    console.log("Turn on your AC.");
}else if(temp <= 90){
    console.log("WHAT???");
}
console.log(!null);  // it was a falsy value but we put a not ! so, it will become a truthy value.

// precedence (preference) of logical operators... 

// ()
// !
// &&
// ||

console.log(true || false && !true);  // solve this:
console.log(true || false && false);
console.log(true || false);
console.log(true);  // solved.

let name11 = NaN;
let name12;
let name13 = "wasif";
let name14 = "Wasif";
// || (or) will run until it finds the first truthy value. If no truthy it will print the last value.
console.log(name11 || name12 || name13 || name14); // this will give the first truthy value.
// && (and) will run until it finds the first falsy value. If no falsy it will print the last value.
console.log(name11 && name12 && name13 && name14); // this will give the first falsy value.

// ternary / conditional operator
let age7 = 17;
age7 > 18 ? console.log("good to go!") : console.log("not good for you!");  // this is ternary operator.

// let above18 = true/ false // we have to check if it is true or false.
let above18 = age > 18 ? true : false;
console.log(above18);

let favtNo = 7;
let myFavtNo = favtNo > 5 ? "it's your favt no." : "no it's not."; 
console.log(myFavtNo);

// Switch statement

let day = 12;
switch(day){
    case 0:
        console.log("Sunday");
        break;  // these breaks are necessary to stop the code when we get our answer.
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
}

// Nullish Coalescing Operator   (??)

let myName;
console.log(myName);
console.log(myName ?? "unknown"); // it will check if the value of myName is undefined or null. If that is so, then 
// it will pass the value written on its right side. Here, unknown. If not then it will pass the value of myName simply.