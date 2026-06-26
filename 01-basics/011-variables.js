const accountId = 12345 ;
let accountEmail = "singhamit79449@gmail.com"
var accountPassword="3434"
accountCity="Delhi"
let accountState


accountEmail="amit@gmail.com"
accountPassword="4343"
accountCity="Banglore"

//let accountState
/* VARIABLE DECLARE KIYA GAYA HAI LEKIN KOI VALUE ASSIGN NAHI KI GAYI.
ISLIYE AGAR PRINT KARENGE TO undefined MILEGA.
*/

/*
PREFER NOT TO USE var
KYONKI var MEIN BLOCK SCOPE NAHI HOTA.
ISSE SCOPE RELATED PROBLEMS AA SAKTI HAIN.
VARIABLES KE LIYE let YA const USE KARNA BETTER HAI.
*/

// const accountId = 12345
//  const KI VALUE BAAD MEIN CHANGE NAHI KI JA SAKTI.

// console.log(accountId); // This will print 12345 to the console
// console.log(accountEmail); // This will print "amit@gmail.com" to the console
// console.log(accountPassword); // This will print "4343" to the console
// console.log(accountCity);
// console.log(accountState); //undefined



console.log([accountId,accountEmail,accountPassword,accountCity,accountState])

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//Execution Phase mein JS sab variables ki values memory se nikalta hai, unka ek array banata hai, aur console.table() us array ko table format mein display kar deta hai. accountState ki koi value assign nahi hui, isliye uski jagah undefined print hota hai.

console.log(accountId,accountEmail)

console.log([accountId])
// JS is line ko evaluate karta hai.
// Step A: [accountId]
// Square brackets dekhkar JS ek naya array banata hai.
// Array ke andar jo expression hai: accountId
// Uski value memory se nikali jaati hai:  accountId -> 12345
// To array ban jaata hai: [12345]


// Step B: console.log()
// Ab JS effectively ye run kar raha hai:
// console.log([12345])
// Aur output deta hai:
// [12345]