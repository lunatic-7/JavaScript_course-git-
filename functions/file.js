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
