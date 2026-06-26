// AGAR EK HI VARIABLE KO BAHUT SAARI VALUES SE COMPARE KARNA HO,
// TO SWITCH USE KARTE HAIN.

// YE if else if else KA ALTERNATIVE HAI.


//BASIC SYNTAX

// switch(expression){

//     case value1:
//         // code
//         break

//     case value2:
//         // code
//         break

//     default:
//         // code
// }

//1//BASIC EXAMPLE//PRINTING THIRD DAY OF THE WEEK... TAKING MONDAY as FIRST

// const day= 3

// switch(day){

//     case 1:
//         console.log("Monday")
//             break
//     case 2:
//         console.log("Tuesday")          
//             break
//     case 3:
//         console.log("wednesday")
//             break
//     default:
//         console.log("invalid day");
            
// }
//OUTPUT: wednesday

//CONCEPT=>
//`DAY = 3` → `CASE 1` MATCH NAHI HUA, 
// `DAY = 3` → `CASE 2` MATCH NAHI HUA,
// `CASE 3 MATCH HUA TO `"WEDNESDAY"` PRINT HOGA, 
// PHIR `BREAK` MIL GAYA AUR `SWITCH` YAHI BAND HO JAYEGA.


//2//BREAK KYA KARTA HAI?
// BREAK SWITCH KO ROK DETA HAI.


//BREAK NAHI LAGAYA TO?//
//EXAMPLE//

// const day= 2

// switch(day){

// case 1:
//     console.log("monday")

// case 2:
//     console.log("tuesday")

// case 3:
//     console.log("wednesday")

// default:
//     console.log("invalid")
// }


//CONCEPT=>
//case 2 MATCH HUA
// Tuesday PRINT

// BREAK NAHI MILA

// NICHE CHALTA RAHEGA
// Wednesday PRINT
// invalid PRINT

//OUTPUT:
// tuesday
// Wednesday
// invalid

//ISKO ***FALL THROUGH*** BOLTE HAIN — JAB `BREAK` NA HO TO EK CASE MATCH HONE KE BAAD USKE NICHE WALE CASES BHI CHALTE REHTE HAIN.

//default KO ELSE KI TARAH SAMJHO KUCH NHI MILA TO DEFALUT WALA CODE PRINT HO JAYEGAA



//3//STRING KE SAATH SWITCH

// const day="tuesday"

// switch(day){

//     case "monday":
//     console.log("monday")
//     break


//     case "tuesday" : 
//     console.log("tuesday")
//     break

//     default:
//     console.log("default")
// }    
//  OUTPUT:tuesday




//4//SWITCH STRICT COMPARISON KARTA HAI
// Switch internally lagbhag === jaisa compare karta hai.

// const value= "2"

// switch(value){
//     case 2:
//     console.log("2")

//     default:
//         console.log("type bhi check karega switch mein")
// }

// OUTPUT:type bhi check karega switch mein

//KYO?
//"2" STRING HAI
// AUR 2 NUMBER HAI
// TYPE SAME NAHI HAI
// ISLIYE MATCH NAHI HUA




//5//MULTIPLE CASE EK SAATH

// const value=5

// switch(value) {
//     case 5:

//     case 6:
//     console.log("hello")
//     break

//     default:
//     console.log("apun")
// }

// OUTPUT:hello

//KYO?
//CASE 5 MATCH HUA, LEKIN BREAK NAHI THA,
// ISLIYE EXECUTION CASE 6 TAK CHALA GAYA AUR WAHAN KA CODE BHI RUN HO GAYA.



//6//
// IF ELSE VS SWITCH

// const day= 3

// if(day==1){
//     console.log("monday")
// }

// else if(day==2){
//     console.log("tuesday")
// }

// else if(day==3){
//     console.log("wednesday")
// }

// else{
//     console.log("invalid day")
// }

//SWITCH

// const day=3

// switch(day){
//     case 1:
//         console.log("monday")

//     case 2:
//         console.log("tuesday")

//     case 3:
//         console.log("wednesday")
//         break                                                 // DIMAG//
//     default:
//         console.log("invalid day")
//     }
    