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