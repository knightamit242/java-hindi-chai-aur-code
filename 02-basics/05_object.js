// SOME MORE ABOUT OBJECT 

//1//
// const course={

//     courseName:"JavaFullStack",
//     instructorName:"Hitesh Sir",
//     coursePrice: 999
// }

// console.log(course.instructorName) // ONE WAY TO ACCESS AND WILL BE MOSTLY USED

//ANOTHER WAY
//1.1//

// const course={

//     courseName:"JavaFullStack",
//     instructorName:"Hitesh Sir",
//     coursePrice: 999
// }

//1.11//
// const {instructorName}= course         
// console.log(instructorName) // OUTPUT:Hitesh Sir 

//EK BAARconst {instructorName}=course  DEFINE KR DO... PHIR BAAR-2 .instructorName NHI LIKHNA PADEGA

// OBJECT DESTRUCTURING SE PROPERTY KI VALUE DIRECT VARIABLE ME AA JATI HAI


//CONCEPT:
// const { KEY } = OBJECT

// OBJECT KE ANDAR SE KEY KI VALUE NIKAAL KAR
// USI NAAM KA VARIABLE BANA DETA HAI.


//YAAD KARNE KA TARIKA
// const { instructorName } = course

// Pehle
// console.log(course.instructorName)

// Yahan course object ke andar se instructorName nikal rahe ho.

// Destructuring mein
// const { instructorName } = course

// Matlab:
// COURSE OBJECT KE ANDAR SE instructorName NIKAAL KAR
// EK VARIABLE instructorName BANA DO.

// Internally ye lagbhag aisa hai:

// const instructorName = course.instructorName


//1.12//
// const {instructorName:ins}= course // ins=> AB AUR CHOTA HO GYA... WILL SAVE TIME AND USED IN REACT
// console.log(ins)

// ALIAS (DUSRA/SHORT NAAM) DIYA GAYA HAI
// instructorName KI VALUE AB ins VARIABLE ME STORE HOGI


// IS PROCESS KO OBJECT DESTRUCTURING BOLTE HAIN
// REACT ME BHI BAHUT USE HOTA HAI




//********************************API ****************************//


// API(APPLICATION PROGRAMMING INTERFACE) SERVER SE DATA LANE KA TARIKA HAI.

// API EK WAITER KI TARAH KAAM KARTI HAI.

// AAJKAL API KA DATA ZYADATAR JSON FORMAT ME AATA HAI.

// JSON = JAVASCRIPT OBJECT NOTATION

// // JSON OBJECT JAISA DIKHTA HAI LEKIN YE STRING FORMAT ME DATA HOTA HAI

// JSON ME KEYS DOUBLE QUOTES ME HOTI HAIN.

// EXAMPLE:

// {
//     "name": "Amit",
//     "age": 22
// }    


