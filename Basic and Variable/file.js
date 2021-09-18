'use strict'; // this is defined to check when we create unintentional variable by typo mistake.
console.log("hello world");

// We use 3 words to define a variable which are var, let and const.
// var is outdated we don't use it anymore.
// Now we use let and const. In let we can change value of a variable but not such case in const. const means constant.

var num = 42;
console.log(num+3);

var name;        
name = "casanova";   // we can define variable like this as well
name = "raven";      // this will update value of varible.
console.log(name);

// const name1;
// name1 = 'harshit';      // But we can't write const. like this.
// console.log(name1)

const name1 = "harshit";
console.log(name1);


// let name = "was";
// namE = "wasif"          // Now this will give an error bc of use strict.
// console.log("name")