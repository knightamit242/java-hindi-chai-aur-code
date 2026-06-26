// 3.5 AND 4.4//  SEE THESE SECTION AFTER READING ALL OTHER SECTION

//for each

//1//CONCEPT//
//ARRAY KE HAR ELEMENT PAR FUNCTION CHALANE KE LIYE USE HOTA HAI.

//PARAMETERS: item,index,array

//IMPORTANT:forEach VALUE DETA HAI, INDEX BHI DE SAKTA HAI.
//BREAK NAHI CHALTA ISME.  CONTINUE BHI NAHI CHALTA.
//RETURN KARNE PAR BHI... UNDEFINED MILTA HAI.


//2// SYNTAX

// array.forEach(function (item){
//         console.log(item)
// })  


//3//EXAMPLE

// 3.1//
// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(item){           //SIMPLE HAI
//     console.log(item)                  //OUTPUT: js ruby java python cpp                                
// })


//3.2// item SE NAAM BADAL KAR KUCH BHI RAKH SKTE HO

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (codingKiValue){
//         console.log(codingKiValue)                 //SAME OUTPUT AS WE SEE IN 3.1
// })



//3.3// FUNCTION KE JAGAH ARROW FUNCTION KA BHI USE KR SKTE HO... TO BHI SAME BAAT HAI

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (pokari)=>{
//     console.log(pokari)                 //SAME OUTPUT AS WE SEE IN 3.1
// })


//3.4//PRINTING ALL LIKE item, index, array

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item,index,array)=>{
//     console.log(item,index,array)              // JO OUTPUT YAHA DEGA
// })


// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((hathi,ghoda)=>{
//     console.log(hathi,ghoda)           //WHI YAHA BHI DEGA... SAME OUTPUT
// })                                        
                        
// CONCEPT*****: SO NAAM TUM KUCH BHI DE SKTE HO... AGAR ANDAR 3 ENTRIES DOGE TO 
// item, index,array TINO PRINT HOGA... 2 DOGE TO BAS.. item, index PRINT HOGA... AUR
// EK DOGE TO item ONLY****



//3.5//
//UNDERSTANDING SOME CONFUSION... SEE THIS SECTION AFTER READING ALL OTHER SECTION

//1//

// user={name:"Amit", age:22}

// // user.forEach(function(item){       //user EK OBJECT HAI... AUR forEach OBJECT PE KAAM NHI KARTA AISE.
// //     console.log(user[item])      
// // })

//1.1//
// INDIRECTLY KAAM KARA SKTE HO AISE 

// user={name:"Amit", age:22}

// Object.keys(user).forEach(function(item){      
//     console.log(item)      //OUTPUT:name
//                                   //age
// })


//2//

//2.1//ONE IMPORTANT CONCEPT

// user.item
// ↓
// "user" object mein ITEM naam ki property dhoondo

// user[item]
// ↓
// item variable ki value nikalo,
// phir us naam ki property dhoondo


// UNDERSTANDING THIS 2.1 THROUGH SOME EXAMPLE

//2.11//
// const user = {
//     name: "Amit",
//     age: 22
// }

//2.12//
// Aur:Object.keys(user)
// return karta hai:["name", "age"]

// To forEach() 2 baar chalega... ISME ["name", "age"]


//2.13//

// TYPE 1
// Object.keys(user).forEach(function(item){
//     console.log(item)
// })

// Iteration 1
// item = "name"
// Ab line execute hogi: console.log(item)
// Matlab:console.log("name")
// Output:name

// Iteration 2
// item = "age"
// Ab:console.log(item)
// Matlab:console.log("age")
// Output:age

// Final Output
// name
// age
// Kyon?

// Kyuki tum item variable ko print kar rahe ho.
// Aur item mein pehle "name" aur phir "age" aa raha hai.

// TYPE 2
// Object.keys(user).forEach(function(item){
//     console.log(user.item)
// })

// Sabse pehle samjho:user.item ka matlab hai:user["item"]  ***** IMP LINE
// ⚠️ Dhyan do: "user" object hai aur "item" ek fixed property name hai.
// Ye item variable ki value nahi dekh raha.

// Iteration 1
// item = "name"
// Ab line chalegi: console.log(user.item)
// JS ISKO dekhega: user["item"]  *****

// Object mein:

// {
//     name:"Amit",
//     age:22
// }

// Kya "item" property hai?
// ❌ Nahi
// Output: undefined

// Iteration 2
// item = "age"....Phir bhi: user.item
// JS ko koi farq nahi padta ki variable item ki value kya hai.
// Ye phir bhi: user["item"] hi dekhega.
// Output:
// undefined

// Final Output
// undefined
// undefined


// TYPE 3
// Object.keys(user).forEach(function(item){
//     console.log(user)
// })

// Iteration 1
// item = "name"
// Line: console.log(user)
// Output: { name: 'Amit', age: 22 }

// Iteration 2
// item = "age" Phir:console.log(user)
// Output: { name: 'Amit', age: 22 }

// Final Output
// { name: 'Amit', age: 22 }
// { name: 'Amit', age: 22 }

// Kyon?
// Kyuki tum poora object print kar rahe ho.
// Loop 2 baar chal raha hai.
// Isliye poora object 2 baar print hoga.


// TYPE 4
// Object.keys(user).forEach(function(item){
//     console.log(user.name)
// })

// Iteration 1
// item = "name"
// Ab:console.log(user.name)
// Matlab:console.log("Amit")
// Output: Amit

// Iteration 2
// item = "age"
// Phir bhi: console.log(user.name)
// Matlab:console.log("Amit")
// Output: Amit

// Final Output
// Amit
// Amit
// Kyon?

// Kyuki tumne item use hi nahi kiya.
// Har baar fixed property:
// user.name
// print kar rahe ho.


// Ab Sabse Important (TYPE 5)*****
// Object.keys(user).forEach(function(item){
//     console.log(user[item])
// })
// Iteration 1
// item = "name"

// Ab:
// user[item]
// ↓
// user["name"]
// ↓
// Amit

// Iteration 2
// item = "age"

// Ab:
// user[item]
// ↓
// user["age"]
// ↓
// 22

// Final Output
// Amit
// 22



// 4// ARRAY OF OBJECT 

// const myCoding=[
//     {
//     languageName: "javascript",
//     shortName: "js"
//     },

//     {
//     languageName: "Clanguage",
//     shortName: "cpp"
//     },

//     {
//     languageName: "python",
//     shortName: "py"
//     }

// ]

// //4.1//
// //AGAR SIRF LANGUAGE NAME CHAHIYE
// myCoding.forEach((item)=>{
//     console.log(item.languageName) //OUTPUT:javascript clanguage python
// })


// YE PROGRAM RUN KAISE KIYA YE SAMJHO ??
// myCoding
// │
// ├── [0]
// │     {
// │       languageName: "javascript",
// │       languageFileName: "js"
// │     }
// │
// ├── [1]
// │     {
// │       languageName: "java",
// │       languageFileName: "java"
// │     }
// │
// └── [2]
//       {
//         languageName: "python",
//         languageFileName: "py"
//       }

//STEP:2
//item ek variable hai.
// JavaScript khud har round me item ke andar array ka ek element daal deta hai.

//STEP:3

// ROUND 1

// item = myCoding[0]

// Matlab:

// item = {
//     languageName: "javascript",
//     languageFileName: "js"
// }

// Ab:

// console.log(item.languageName)

// Matlab:

// console.log("javascript")

// Output:

// javascript 

// SAME AISE HE BAAKI 2 ROUND AUR HONGE.


//

// const myCoding=[
    // {
    // languageName: "javascript",
    // shortName: "js"
    // },

//     {
//     languageName: "Clanguage",
//     shortName: "cpp"
//     },

//     {
//     languageName: "python",
//     shortName: "py"
//     }

// ]

// //4.2// AGAR POORA ARRAY PRINT KARNA HO

// myCoding.forEach((item)=>{
//     console.log(item)
// })


//4.3// DONO VALUES PRINT KARANA

// myCoding.forEach((item)=>{
//     console.log(`${item.languageName}:${item.shortName}`)
// })


//4.4// SEE THIS SECTION AFTER READING ALL OTHER SECTION

// myCoding.forEach((item)=> console.log(Object.keys(item)))

//(Object.keys(item))=> IS LINE KA MTLAB ITERATION 1 MEIN :
//  {
//     languageName: "javascript",
//     shortName: "js"
//     },
// item~ CURRENT MEIN ITERATOR ABHI IS OBJECT PE JAAYEGA KYOKI YE ARRAY KA PEHLA ELEMENT HAI...
// THAT IS myCoding[0]... AB
// Object.keys=> IS CURRENT OBJECT KI KEYS DEGA... OUTPUT: [ 'languageName', 'shortName' ]

// TO YAHA 3 BAAR LOOP CHALEGA KYOKI ARRAY MEIN 3 VALUES HAI...
// BAKKI DONO MEIN BHI SAME PROCESS HOGA


//4.5// COMPLETE DIFFERENT TOPIC RELATED TO Template Literal (${})  AND OBJECT ONLY

//Template Literal (${}) KE ANDAR JAB OBJECT AATA HAI ???

// const myCoding=[
//     {
//     languageName: "javascript",
//     shortName: "js"
//     },

//     {
//     languageName: "Clanguage",
//     shortName: "cpp"
//     },

//     {
//     languageName: "python",
//     shortName: "py"
//     }

// ]
// myCoding.forEach((item)=>{
//     console.log(`${item}`)    //PROBMLEM AAYEGI
// })

//BCOZ
//JavaScript Template Literal (${}) KE ANDAR JAB OBJECT AATA HAI TO...
//  object ko string mein convert karne ki koshish karti hai.

// Object string mein convert hoke banta hai:

// "[object Object]"

// Isliye output kuch aisa aayega:

// [object Object]
// [object Object]
// [object Object]



//5//RETURN VALUE

// const array=[1,2,3,4]

// array.forEach((item)=>{
//     console.log(item)
// })

// LEKIN AGAR array.forEach KO KISI VARIABLE MEIN DAAL DE... TO YE undefined RETURN KRTA HAI

//EXAMPLE

// const array=[1,2,3,4]

// const value=array.forEach((item)=>{
//     console.log(item)
// })

// console.log(value)     //undefined