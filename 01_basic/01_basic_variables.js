const myName = "Naresh";           
let email = "naresh@google.com";
var password = 12345;            // 
city = "Pune";
let accountBalance;

// myName = "Naresh HC";           It will not work as it is a const
email = "nhc@google.com";
password = 98765;
city = "Noida";

/*
    Notes :- 
      1. const vales can't be changed.
      2. var has a issue of block and functional scope.
      3. Try to use const and let for coding for projects.
      4. If you dont give a value to variables it will show as undefined.
*/


console.table([myName, email, password, city, accountBalance]);