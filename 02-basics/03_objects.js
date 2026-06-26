// OBJECT
//JAVASCRIPT MEIN OBJECT BANANE KE 2 METHOD HAI
//1.OBJECT LITERAL                                       //2.OBJECT CONSTRUCTOR

//1//
//1.OBJECT LITERAL (MOSTLY USED)
 
// const user= {
//     name:"Amit",
//     age:22
// }

//HOW TO ACCESS VALJUE?
// console.log(user.name)
// console.log(user.age)

//Curly braces {} Object banati hain.
// Iske andar data key-value pairs me store hota hai.
// OBJECT IS A COLLECTION OF KEY-VALUE PAIRS.
// KEY  → NAME                                   // KEY  → AGE
// VALUE → "AMIT"                                // VALUE → 22

//user ek OBJECT hai jisme 2 properties hai name and age.





//2//
//2. OBJECT CONSTRUCTOR (LESS USED)
// OBJECT CONSTRUCTOR USE KARKE OBJECT BANA RAHA HAI.

// **new** → NAYA OBJECT CREATE KARO.
// **Object()** → OBJECT CONSTRUCTOR FUNCTION.
// Yaha Object() constructor naya object create karta hai

// const user= new Object({
//     name: "Amit",
//     age:22
// })

// console.log(user.name)
// console.log(user.age);


//3//
// SINGELTON
// new Object() → SINGLETON ... IS METHOD SE BANTE HAI TO USSE SINGELTON... EK HE OBJECT BANTA HAI
// {}           → NON-SINGLETON   .... OBJECT LITERAL METHOD SE SINGELTON NHI BANTA HAI

//Ye Chai aur Code wali terminology hai, practical JS me zyada use nahi hoti.
// Agar notes me rakhna hai to theek hai, lekin isko JS rule mat samajhna.



//4//MORE ABOUT OBJECT LITERAL
//IMPORTANT=> JAVASCRIPT YAHA KEY KO AUTOMATICALLY STRING MAAN LETA HAI... LEKIN VALUE KA TYPE WAHI HOGA JO TUM USKE ANDAR DAALOGE

// const user= {
//     "fullname":"AmitSingh",
//     name: "Amit",
//     age: 22,   //AGE KO QUOTES MEIN LIKHO YA NA LIKHO... WO STRING HE RAHEGA
//     highSchoolPassAge: 15,
//     "location": "Deoria",
//     email: "singhamit79449@gmail.com",
//     isLoggedIn: false
// }

// console.log(typeof user.isLoggedIn) //"boolean"
// console.log(user.age)
// console.log(user.highSchoolPassAge)
// console.log(user.location)
// console.log(typeof user.age)        //"number"
// console.log(typeof user.highSchoolPassAge); //"number"


//4.01
//ADDING KEY AND VALUE TO THE EXISTING OBJECT//

// const user= {
//     "fullname":"AmitSingh",
//     "age": 22,   
// }

// user.location="Deoria"   // SIMPLE PROCESS TO ADD
// console.log(user)         

// console.log(user.location)  // LOCATION ACCESS HO JAYEGA



//4.1//
// ANOTHER WAY TO ACCESS THESE VALUES

// const user= {
//     name:"Amit",
//     age: 22,
//     location: "Deoria",
//     email: "singhamit79449@gmail.com",
//     isLoggedIn: false
// }

// console.log(user["name"]) //JAVASCRIPT KEY KO AUTOMATICALLY STRING MAAN LETA HAI
// console.log(user["age"])         // ISLIYE SABKO QUOTES ME DOGE... 
// console.log(user["isLoggedIn"])


//4.3// EXCEPTION CASE
// const user= {
//     "full name": "Amit Singh"
// }

// // console.log(user.full name)// error dega
// console.log(user["full name"]);  // []=> ISKA USE KROGE TO ERROR NHI DEGA



//5// SYMBOL KO AS A SYMBOL PRINT KRNA

//5.1//Case 1: Galat tarika (agar Symbol key banana chahte ho)

// const mySym= Symbol("this is symbol")

// const user={
//     name:"Amit",
//     age: 22,
//     mySym: "ye rha symbol",
// }

// console.log(user.mySym) // ye rha symbol
// console.log(typeof user.mySym ) 
// // string DEGA... KYONKI mySym EK STRING KEY KI TARAH TREAT HO RAHA HAI AUR USKI VALUE BHI STRING HAI. ISLIYE OBJECT ME YE NORMAL STRING PROPERTY BAN JAATI HAI, SYMBOL PROPERTY NAHI.

// console.log(user) //***  Symbol JAISE PRINT NHI HOGA... AS A string HE PRINT HOGA//*** 



//5.2//Case 2: Symbol ko actual Symbol key banana***

// const mySym= Symbol("this is symbol")

// const user={
//     name:"Amit",
//     age: 22,
//     [mySym]: "ye rha symbol" // SYMBOL PROPERTY AISE LIKHOGE
// }
// CONCEPT USED//
// Yahan [] ka special meaning hai.
// JavaScript kehta hai:
// "Variable mySym ki value lo aur use key banao."

// Aur mySym ki value hai:
// Symbol("this is symbol")

// To object kuch aisa ban jata hai:

// {
//    [Symbol("this is symbol")]: "ye rha symbol"
// }

// Ab key string nahi hai.
// Ab key actual Symbol hai.

// ACEES BHI AISE HE HOGA
// console.log(user[mySym])     // YAHA BHI ye rha symbol HE DEGA ... LEKIN AB AS A SYMBOL TREAT HOGA
// console.log(typeof mySym);  // AB "symbol" DEGA... kyoki mySym symbol HAI

// console.log(user);  //*** SYMBOL... SYMBOL JAISE HE PRINT HOGA





//6//
// const user= {
//     "full name":"Amit Singh",
//     name: "Amit",
//     "age": 22,   
//     highSchoolPassAge: 15,
//     "location": "Deoria",
//     email: "singhamit79449@gmail.com",
//     isLoggedIn: false
// }

// //6.1// CHANGE ANY VALUES
// user.email="singhamit@chatgpt.com"
// console.log(user.email)  //email CHANGE HO JAYEGI

// //6.2// FREEZING
// Object.freeze(user) // AB JO BHI CHANGES USER MEIN KROGE WO APPLY NHI HONGE KYOKI HAMNE FREEZE KR DIYA HAI
// user.email="amit@gmail.com" 
// console.log(user.email); //singhamit@chatgpt.com<= POORANA WALA HE EMAIL PRINT HOGA

// //6.3// 
// console.log(user); // POORA OBJECT HE PRINT HO JAYEGA // FREEZE KE BAAD WAALE CHANGES NHI DIKHENGE



//7// ADDING FUNCTION// OBJECT KE ANDAR FUNCTION KO PROPERTY KI TARAH STORE KRNE KA CONCEPT 

//7.1// METHOD.1

// const user= {
//     "full name":"Amit Singh",
//     name: "Amit",
//     "age": 22,  
//     greeting: function(){
//         console.log("hello user")
//     },
//     email: "singhamit79449@gmail.com",
//     isLoggedIn: false
// }

// console.log(user.greeting)  // Function KO SIRF DEKHEGA... CALL NHI KREGA YA EXECUTE NHI HOGA
// console.log(user.greeting())  // Function CALL KREGA... PHIR EXECUTE BHI HOGA

//IS METHOD MEIN=>
//  KEY      → greeting
// VALUE    → function



//7.2//METHOD.2// NAYA OBJECT BANAKAR FUNCTION USME STORE KRNA

// const user1 = {}
// user1.greeting = function(){       // greeting:key AND function():value ho jayegi
//     console.log("hello user")      //SAME UPAR WAALE METHOD JAISE FUNCTION OBJECT KI PROPERTY JAISE STORE  
// }                                  // HO JAYEGA

// console.log(user1.greeting())

//*****************************DONO METHOD SAME HAI******************************** */




//8// REFERING THROUGH STRING INTERPOLATION METHOD (`${}`)   OR TEMPLATE LITERAL BHI BOLTE HAI

// const user1 = {
//     name:"Amit Singh"
// }

// user1.greeting = function(){       
//     console.log("hello user")     
// }                                  

// user1.greetingTwo= function()
// {
//     console.log(`hello my name is, ${this.name}`)
//     //  ${this.name} :means CURRENT OBJECT KE ANDAR JO name PROPERTY HAI USKI VALUE NIKALO
//     // CURRENT OBJECT MATLAB user1 ... USME JO name PROPERTY HAI USKO NIKALO 
//     // user1.name= Amit singh
// }

// console.log(user1.greeting())
// console.log(user1.greetingTwo())

// //UNDEFINED ISLIYE AA RHA HAI KYOKI HUM KUCH RETURN NHI KR RHE HAI


             // POINT TO REMEMBER//
//MOST IMP: MOSTLY DOT(.) METHOD WILL BE USED IN OBJECT FOR ACCESSING THE VALUE
            // ONLY ON EXCEPTION CASES, THEY WILL BE NOT USED//

// SPECIAL CASES (SPACE WALI KEY, SYMBOL KEY, DYNAMIC KEY) ME BRACKET NOTATION USE HOTI HAI