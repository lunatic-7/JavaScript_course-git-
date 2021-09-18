'use strict';

let firstName = "Wasif";
let lastName = "Nadeem";
let fullName = "wasif nadeem";
let age = 17;

console.log(firstName, lastName); // like this we can call 2 variables at a time in one line.
console.log(`I'm ${fullName} and I'm ${age} years old.`); // String concatenation. (addition of string)
console.log(firstName.length); // to count length of characters.

let newStr = "We often just see what we expect to see\n~ Erric Matthews"; // \n to move to next line, rest are same as of python. like \t for tab etc.
console.log(newStr);

console.log(firstName[0]); // string indexing. (counting starts from 0)
let lastChr = firstName[firstName.length-1]; // when we don't know last chr. and we wnat to get that.
console.log(lastChr); 

let slice = firstName.slice(0,4); // to print particular no. of chrs.
let subStr = firstName.substr(0,4); // works same as slice.
console.log(slice);
console.log(subStr);

let lower = firstName.toLowerCase();  // to change everything chr to small.
console.log(lower);

let upper = firstName.toUpperCase();  // to capitalize every chr.
console.log(upper);
