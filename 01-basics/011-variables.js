const accountId = 12345 ;
let accountEmail = "singhamit79449@gmail.com"
var accountPassword="3434"
accountCity="Delhi"

accountEmail="singhamit79449@gmail.com"
accountPassword="4343"
accountCity="Banglore"

let accountState /* ye variable hai lekin  iski value nahi di gayi hai phir bhi output mein undefined show hoga */ 

/*
Prefer not to use var
because of issue in block scope and functional scope
use let only for variables
*/ 

/*
console.log(accountId); // This will print 12345 to the console
console.log(accountEmail); // This will print "singhamit79449@gmail.com" to the console
console.log(accountPassword); // This will print "3434" to the console
console.log(accountCity);
*/

// console.log([accountId,accountEmail,accountPassword,accountCity,])

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
