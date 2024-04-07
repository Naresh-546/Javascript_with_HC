const firstName = "Naresh";
const lastName = " Choudhari";

// console.log("My name is " + firstName + lastName ); // Old way
// console.log(`My name is ${firstName}${lastName}`); // New way

const gameName = new String("Valorant-Game");
// V a l o r a n t - G a  m  e
// 0 1 2 3 4 5 6 7 8 9 10 11 12
// console.log(gameName);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf("t"));

// console.log(gameName.substring(0, 8)); 
// Takes first index and didn't take last index

// console.log(gameName.slice(9, 13));
// Takes first index and didn't take last index


// ***** Trim *******
// Removes blank spaces 

const myWebsite = "    www.aws.com   "
console.log(myWebsite);
console.log(myWebsite.trim());

// ******** Replace *********

const url ="https://www.youtube.com/ you-tube"
console.log(url.replace(' ','-'));
console.log(url.includes('you'));
console.log(url.includes('too'));

// ********* Split ******

const favFood = "pavBhaji-Paneer-RasMalai-Misal"
console.log(favFood.split('-'));