//1// IMPORTANT TO REMEMNBER

// ==   → VALUE CHECK + TYPE CONVERSION

// ===  → VALUE + TYPE CHECK

// &&   → DONO TRUE CHAHIYE

// ||   → EK TRUE KAAFI HAI

// !    → RESULT ULTA KAR DETA HAI

// FALSY VALUES:

// false
// 0
//-0
// ""
// null
// undefined
// NaN
//BigInt.. wrong
//0n

// TRUTHY EXAMPLES:

// 1
// -1
// "amit"  // string ke andar kuch bhi likhe ho to truthy value hai
// []
// {}
// true
// "0"
// " "
// function () {}


//2//

// const isLoggedIn = false
// const age = 20
// const hasSubscription = false

// if(isLoggedIn){

//     if(age >= 18 && hasSubscription){
//         console.log("Premium Access")
//     }
//     else if(age >= 18){
//         console.log("Basic Access")
//     }
//     else{
//         console.log("Under Age")
//     }

// }
// else{
//     console.log("Please Login")
// }


//2.1// CHECK IF ARRAY IS EMPTY OR NOT USING IF

//  user=[]

//  if (user.length==0){
//     console.log("array is empty")
//  }


//2.2// CHECK IF OBJECT IS EMPTY OR NOT USING IF

// const emptyObject={}

// if(Object.keys(emptyObject).length===0){   //UNIQUE...IMP TOO
//     console.log("object is empty")
// }

// Concept
// Object.keys(emptyObject)

// Output:
// []
// Ab:
// [].length

3//
// const balance =1000
// if (balance > 500) console.log("test"),console.log("test2"); 
// AISE BHI LIKH SKTE HO WITHOUT USING CURLY BRACES... BUT AISE LIKHTE NHI HAI


//4//

// const user= 555

// if(user>444){
//     console.log("hi")  // Output:hi
//     const marks=444
// }

// console.log(marks) //  Output:marks is not defined dega... ALREADY DISCUSSED CONCEPT

//SOME QUESTIONS

//console.log("" == false)
//== TYPE CONVERSION KARTA HAI

// "" → 0
// false → 0
// 0 == 0

// OUTPUT:
// true

// console.log(null == undefined)
// JAVASCRIPT KA SPECIAL RULE
// null == undefined

// OUTPUT:
// true


// console.log(null === undefined)
// TYPE ALAG

// OUTPUT:
// false


// const num = 0

// if(num){
//     console.log("A")
// }
// else{
//     console.log("B")
// }

// 0 = FALSY

// if(false)

// OUTPUT:
// B


// const user = ""

// if(!user){
//     console.log("Empty")
// }
// else{
//     console.log("Filled")
// }

// "" = FALSY

// !"" = true

// if(true)

// OUTPUT:
// Empty