'use strict';

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (this will come in output it means it is the maximum safe no. after that we can't trust on it. it may work or may not.)
let num = 9007199254740991;
num = num + 2;  // like here, it isn't working well.
console.log(num);

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991 (so this is the minimum safest no.)

let number = 2e3;  // it means 2 * 1000
let number2 = 2.1e4; // it means 2.1* 10000
console.log(number2);
console.log(number);
let number3 = 2e-3;  // it means 2 / 1000
console.log(number3);

let number4 = 10_00_000_0; // it is 10000000. (it is just to make no. readable)
console.log(number4);

let numb = 4;
numb++;     // shortcut of adding a 1
console.log(numb);

let numb2 = 4;
numb2--;   // shortcut of subtracting a 1
console.log(numb2);

let number7 = 12;
let number8 = "10";
number8 = parseInt(number8);  // this will change string "10" in Integer. But id doesn't go well with decimal nos.
console.log(number7 + number8);

let number9 = "10.25";
number9 = parseFloat(number9);  // This works with decimal nos. as well.
console.log(number7 + number9);

let number10 = "17.77";
console.log(typeof(number7));  // it will give number. (They just tell the type of variable stored.)
console.log(typeof number10);  // it will give string. (They just tell the type of variable stored.)

let und;  // it will give undefined as we haven't passed any value to it.
console.log(und);

let nl = null;  // It will give null as we have given it null value.
console.log(nl);

let rnd = 12.7;
console.log(Math.round(rnd)); // it will round off the no.
console.log(Math.floor(rnd)); // it will round off to lower integer.
console.log(Math.ceil(rnd));  // it will round off to higher value.

let pos = -17.7;
console.log(Math.abs(pos)); // it will make the no. positive.
console.log(Math.max(17, 28, 19.5, 27.99, 30.7)); // it will tell which is the maximum no.
console.log(Math.min(17, 28, 19.5, 27.99, 30.7)); // it will tell which is the minimum value.

let randomNumber = Math.random(); // [0,1] (it will give random nos. blw 0 to 1 in which 0 is inclusive.)  
console.log(randomNumber);

let randomNumber2 = Math.random()*10;  // if we want nos. b/w 0 to 10
console.log(randomNumber2);

let randomNumber3 = Math.floor(Math.random()*100); // it will give integers only 0 to 100
console.log(randomNumber3);

let minNum = 5;
let maxNum = 10;
let randomNumber7 = Math.floor(Math.random() * (maxNum-minNum+1) + (minNum)); // to get nums b/w 5 to 10. we put +1 to get 10 as well.
console.log(randomNumber7);

let bigNumber = 9007199254740992890797902n;  // putting an n makes it a BigInt funct. now we can reach ahead the limit of MAX_SAFE_NUMBER
bigNumber = bigNumber + 2997619527n;
console.log(bigNumber);

let bigNumber2 = BigInt(90071992547409922211); // or instead of putting an n we can write like this.
bigNumber2 = bigNumber2 + BigInt(28888888888);
console.log(bigNumber2);

console.log(1/0);  // it will give infinity.
console.log(-1/0);  // it will give -infinity.