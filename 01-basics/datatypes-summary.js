

//**********************************Data Types Summary********************************** *//

// the way the data is stored in the memory and accessed ... data types are categorized into two types : primitive and non-primitive data types.

// 1. Primitive data types 
//7 types of primitive data types : string, number, boolean, null, undefined, symbol and BigInt

// 2. Non-primitive data types or reference data types
// types of non-primitive data types : object, array and function


//*******************Statically Typed and
                                  //Dynamically TypedLanguages ************************** *//
//=> Javascript is a dynamically typed language, which means that the type of a variable is determined at runtime and can change as the program executes. In contrast, statically typed languages require you to declare the type of a variable when you create it, and that type cannot change throughout the program.

//1. Statically Typed Language

// Static typing mein variable ka type pehle se fix hota hai.

// Example (Java):

// int age = 22;
// String name = "Amit";

// Agar aap baad mein likho:

// age = "Hello";

// To error aayega.

// Kyun?

// Kyuki age ko int declare kiya gaya tha aur ab usme string store karne ki koshish kar rahe ho.

// Static Typing ka fayda

// Error compile time par hi pakad li jaati hai.

// int age = 22;
// age = "Amit"; // Error

// Program run hone se pehle hi pata chal jayega ki galti hai.

// Examples
// Java
// C++
// C#
// Go

// Ye mostly statically typed languages hain.

// 3. Dynamically Typed Language

// Dynamic typing mein variable ka type fix nahi hota.

// JavaScript mein:

// let data = 10;

// Abhi data Number hai.

// Thodi der baad:

// data = "Amit";

// Ab data String ban gaya.

// Phir:

// data = true;

// Ab data Boolean ban gaya.

// JavaScript ko koi problem nahi.

// Yahi dynamic typing hai.

// 4. JavaScript mein type variable ka nahi, value ka hota hai

// Bahut important point.

// Naye developers sochte hain:

// data variable Number hai.

// Actually JavaScript mein:

// let data = 10;

// Variable data Number nahi hai.

// Uske andar jo value hai (10) wo Number hai.

// Isi liye baad mein:

// data = "Hello";

// kar sakte ho.


//=>Symbol 
const id=Symbol('123')
const anotherId=Symbol('123')

//console.log(id===anotherId)// ye false dega kyoki symbol unique hota hai chahe uska description same ho tab bhi wo alag alag symbol hoga isliye ye false dega

//=>BigInt
const bigNumber=BigInt(123456789012345678901234567890)
//console.log(bigNumber)// ye 123456789012345678901234567890n dega kyoki BigInt ke end mein n lagta hai isliye ye 123456789012345678901234567890n dega



// 2. Non-primitive data types or reference data types
// types of non-primitive data types : array, object and function
//ye all 3 non-primitive ka datatype object  hota hai aur function ka object function hota hai  


//=>Array  
// array ke andar kisi bhi type ka data store kar sakte hai
const heros=["shaktiman","doga","nagraj"];
//console.log(typeof heros) //=>Object



//=>Object:
// object ke andar kisi bhi type ka data store kar sakte hai
const person = {
    name:"Amit",
    age:22,
    city:"Delhi"
}

//console.log(typeof person) //=>Object


//=>Function:
const myFunction = function() {
    // Function body
}
//console.log(typeof myFunction)




//**************************************STACK and HEAP ************************** *//
//primitives data types are stored in stack memory and non-primitive data types are stored in heap memory. 


//stack & Primitive

//let myCollegeName="RRIMT"

//let anotherName=myCollegeName

//console.log(myCollegeName) //=>RRIMT
//console.log(anotherName) //=>RRIMT
//abhi tak anotherName mein bhi RRIMT store hai lekin agar hum anotherName change kr de=>

    
let myCollegeName="RRIMT"

let anotherName=myCollegeName
anotherName="RRGI"          //yaha change kr diya

//console.log(myCollegeName)//=>RRIMT
//console.log(anotherName) //=>RRGI

//=>TO sum up, primitive data types are stored in stack memory and when we assign a primitive value to another variable, it creates a copy of that value. So, when we change the value of the second variable, it does not affect the first variable because they are stored separately in memory.

//=>hindi me bole to, primitive data types stack memory mein store hote hain aur jab hum ek primitive value ko dusre variable ko assign karte hain, to wo us value ki ek copy bana kr usse deta hai na ki original value deta hai usse... isliye jab hum dusre variable ki value change karte hain, to wo pehle variable ko affect nahi karta kyunki wo dono alag alag memory mein store hote hain.

//heap & non-primitive
let userOne={
    email:"amit@google.com",
    upi:"amit@okaxis"
}

let userTwo=userOne
userTwo.email="satyam@google.com"

console.log(userOne.email)
console.log(userTwo.email)


//=>TO sum up, non-primitive data types are stored in heap memory and when we assign a non-primitive value to another variable, it creates a reference to the same memory location. So, when we change the value of the second variable, it affects the first variable because they both point to the same memory location.

//=>hindi me bole to, non-primitive data types heap memory mein store hote hain aur jab hum ek non-primitive value ko dusre variable ko assign karte hain, to wo us memory location ka reference bana kr usse deta hai... mtlab dono variable same memory location ko point krte hain... isliye jab hum dusre variable ki value change karte hain, to wo pehle variable ko affect karta hai kyunki wo dono same memory location ko point krte hain.


//simply stack ke anadar aapko copy mailta hai aur heap ke anadar aapko reference milta hai.
//refernce ka matlab ap jo bhi changes krenge wo original value mein hoga


//Reason For Commit:TO make personal commit of this topic for future reference