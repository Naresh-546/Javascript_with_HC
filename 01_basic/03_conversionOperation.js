let score = "33";
let score1 = "33abc";
let score2 = null;
let score3 = undefined;
let score4 = false;

// console.log(typeof score);
// console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof score);
console.log(valueInNumber);

let valueInNumber1 = Number(score1)
console.log(typeof score1);
console.log(valueInNumber1);

let valueInNumber2 = Number(score2)
console.log(typeof score2);
console.log(valueInNumber2);

let valueInNumber3 = Number(score3)
console.log(typeof score3);
console.log(valueInNumber3);

let valueInNumber4 = Number(score4)
console.log(typeof score4);
console.log(valueInNumber4);


let isLoggedIn = true;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


/*
Notes :-

"33"      => 33
"33abc"   => Nan

Boolean :-
true      => 1
false     => 0
""        => false
"Naresh"  => true

*/