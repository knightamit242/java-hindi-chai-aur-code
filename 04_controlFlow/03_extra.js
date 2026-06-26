
// NULLISH COALESCING OPERATOR (??) // WORKS ON NULL AND UNDEFINED ONLY

// let val1;
//val1= 5??10  //Output:5

//val1= 5??undefined // Output:5

//val1= null??5     // Output:5

// val1= undefined??5    // Output:5


// val1 = null?? 20?? 45  // Output:20 // 20 pehle hai... to 20 de dega


// console.log(val1)

// 0 || 10
// Output: 10

// 0 ?? 10
// Output: 0

// || falsy values dekhta hai.
// Lekin
// ?? sirf null aur undefined dekhta hai.


//  TERNARY OPERATOR

//SYNTAX: condition ? true statement yaha likhoge : yaha false statement

const matchTicket= 1000
matchTicket>= 800 ? console.log("more than 800") : console.log("less than 1000")

