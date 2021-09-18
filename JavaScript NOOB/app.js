//                                     VARIABLES AND DATA TYPES

let life = 100; // So, these double slash acts as comment.

// Here we define a variable life in let, we can assign it to any values. and later on we can modify it as well if we need to 
// bc, we have assigned it in let. 

// ; This is necessary to use afer every sentence to let Javascript know that your sentence is over.

// We use (let) and (const), In let we can change values later but in const we can't change values it's just constant.

life = life - 10; // Here, we modified the value of life. It will be 100 - 10 = 90

const name = 'Wasif Nadeem';

let checkout = false; // These true and false are called boolean.

let box; // As we didn't give any value to box, it will give undefined in output.

// Finally we will put the name of variable in log( this column ) to make it run.

console.log(life); // Here, we will get modified value of life.

//                                         FUNCTIONS AND PARAMETERS

// Functions -  A set of code that we write, to use in our further programms.

// A function to add numbers
function adder(num1, num2) {
    console.log(num1 + num2);
}

adder(17, 17); // Here we assign the numbers we want to add

const name_1 = "Dev Ed";

// A function to capitalize all letters.
// function toUpper(text) {
//     const upperCased = text.toUpperCase();
//     console.log(upperCased);
// }

// Better way to write upper code is:
const toUpper = (text) => {    // (=>) this symbolize function.
    upperCased = text.toUpperCase();
    console.log(upperCased);
}

toUpper(name_1); // Here, we give the variable we want to upper case.

//                                    STRING CONCATENATION

// It is just addition of strings.

// const name = 'Wasif Nadeem'; (No need to write this again we have already defined it)
const age = 17;

console.log(`Hello! it's me ${name} my age is ${age} and it means I m getting older.`); // We use (``) it's like using 
// formatting (f) method in python.

console.log(typeof name); // with this typeof we can check what kind of data we have.
console.log(typeof age); // with this typeof we can check what kind of data we have.

//                                    If Else and or Statements

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

//                                               Javascript Arrays

// Array is a place where we can store a lot of information in one place. For ex: Our Schedule

const schedule = ['wake up', 'eat', 'Ap', 'Code',];
console.log(schedule); // accessing our array.
console.log(schedule[0]); // accessing particular things from array. Counting starts from 0.

schedule.push('sleep at 5'); // push function is used to add something in our existing array.
console.log(schedule);

schedule.pop(); // So, if we leave it like this, it will simply remove last value from array.
console.log(schedule);

schedule.shift(); // to remove anything from beginning.
console.log(schedule);

schedule.unshift('Dream'); // to add anything in beginning.
console.log(schedule);

const ap = schedule.indexOf("Ap"); // indexOf function will give the position of Ap here.
console.log(ap);

//                            Javascript Objects and Keyword This

// Let's create objects, (It's like dictionary in python.)

const user = {
    name: 'wasif',
    age: 17,
    married: false,
    purchases : ['car', 'laptop', 'phone'],

    sayName: function() { // Here, we defined function inside object.
        console.log(this.name); // here we use this, this recalls everything stored in our window object.
    }                           // the things which we have used till now
};

user.sayName();

console.log(this); // by this we can see all the things stored in window object including the variables we have used so far.

//                                     For loop and While loop

const players = ['Harry', 'John', 'Maria', 'Ray', 'Alice', 'Potter', 'Burrito'];

for (player of players) { // Here, we loopthrough players
    console.log(player);
    if (player === 'Ray') { // This will check when Ray's turn comes, and then will give the further output.
        console.log("Ray is in my list!");
        break; // this will break the loop when we reach to Ray.
    }
}

let loading = 0;

while(loading < 100) {
    console.log("Website is loading!"); // I can't run this code right here, bc it will become infinite loop.

    loading++; // This simply means loading += 1;
}

//                                     Dom Manipulation

const title = document.querySelector(".title");
const changeColor = document.querySelector(".changeColor");

// Now we can manupulate these anyway we want...

// title.style.color = "Red"; // Now our hello is in red, We can do a lot of things with that.
// title.style.backgroundColor = "green"; // To change background color.

// Another popular thing, we can do is to add classes to them.
title.classList.add("change"); // instead of add if we write remove it will remove the class.

changeColor.addEventListener("click", function() { // so, now as we click it will change everything acc. to our class.
    title.classList.toggle("change"); // This toggle function will act like a switch whenever we click on click me it
}); // will turn our class on and off simply.

const userList = document.querySelector(".name-list"); // we use all to select everything the that class.
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

// for (member of userList) {
//     member.addEventListener("click", function() {
//         this.style.color = "green"; // Now, whenevr we click on any name it will change its color to green.
//     });
//}
// So, we have added a new button push in html which will add the list.

addListBtn.addEventListener("click", function() {
    // create an li out of thin air.
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    // add the input value inside that new li.
    newLi.appendChild(liContent);
    // attaching the li to the user list.
    userList.appendChild(newLi);
});