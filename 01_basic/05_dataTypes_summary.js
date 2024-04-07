/* Primitive data types :- 
   1. String
   2. Number
   3. Boolean
   4. null
   5. undefined
   6. symbol
   7. BigInt
*/ 

/* Reference (Non-Primitive)
    1. Array
    2. Objects
    3. Functions
*/

// Symbol data type :-

const id   = Symbol("123");
const id_1 = Symbol("123");

console.log(id === id_1);
console.log(typeof id);

// BigInt data type :-

const bigNumber = 54857498655498n
console.log(bigNumber);
console.log(typeof bigNumber);

// Array :-

const bio = ["Naresh", 23, "BCA", "Pune"]
console.log(bio);
console.log(typeof bio);

// Objects : -  
let myBio = {
    name : "Naresh",
    age : 23,
    study : "BCA",
    city : "Pune", 
}
console.log(myBio);
console.log(typeof myBio);


// Function

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);


// ********************** Types Of Memories ******************

/*

1. Stack  (Primitive)
2. Heap   (Non-Primitive)

*/

