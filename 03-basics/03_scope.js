//UNDERSTANDING GLOBAL AND LOCAL SCOPE

//1//
// let a= 10
// const b= 20
// var c = 30

// console.log(a)
// console.log(b)
// console.log(c)
//YAHA TO YE ACCHE SE CHAL JAYEGA WITHOUT ANY PROBLEM


//1.1// PROBLEM ARISE WHEN

// if(true)
// {
//     let a= 10    //NOW ACCORDING TO LOCAL SCOPE a,b AND c KI VALUE LINE NO. 17 SE 21 MEIN HE DEFINED 
//     const b= 20         //REHNI CHAHIYE
//     var c = 30       //{} ISKO SCOPE BOLTE HAI... TO ISKE BAHAR INKI VALUE NHI JANI CHAHIYE
// }                    // YHI HAI BLOCK SCOPE

// // console.log(a)   // ISKO RUN KROGE TO a is not defined ERROR DEGA
// // console.log(b)   //YHA BHI SAME b is not defined ERROR DEGA
// console.log(c)      //LEKIN YAHA 30 OUTPUT DE DEGA... JO NHI DENA CHAHIYE... YAHA PE var USE KARNE KE
// WAJAH SE VALUE KA SCOPE GLOBAL HO JATA HAI... WO BLOCK SCOPE CONSIDER NHI KRTA

                        // THIS HAPPENS BECAUSE OF USING var DATA TYPE... IT IS THE REASON WE DONT USE IT

// IMPORTANT***// UPAR KI BAAT  BAS THODI SE CONCEPTUALLY GALAT HAI...
// `var` BLOCK SCOPE FOLLOW NAHI KARTA, YEH function-scoped HOTA HAI.
// `VAR` HAMESHA GLOBAL NAHI HOTA,
//  AGAR KISI FUNCTION KE ANDAR DECLARE KIYA GAYA HO TOH WOH SIRF USI FUNCTION TAK LIMITED REHTA HAI.

//EXAMPLE

// function test(){
//     var x = 10
// }

// console.log(x) // Error


//1.2//

// var c= 300

// if(true)
// 
{
    let a= 10    
    const b= 20         
     c = 30       // c ABHI BHI var HE HAI... ISLIYE 30 OUTPUT MEIN AAYEGA
}                   

// console.log(a)  
// console.log(b)  
// console.log(c)      //30



// //1.3//

// const a=33
// const b= 44
// if(true)
// {
//     let a= 10
//     console.log("INNER a :",a)
//     const b= 20
//     var c = 30
// }

// console.log("BAHAR WALA a:",a)    //OUTPUT:33
// console.log(b)   
// console.log(c)



//1.4//

// const baharKiValue=33
// if(true)
// {
//     let a= 10
//     console.log("INNER a :",a)
//     console.log("globalscopeWaliValue:",baharKiValue)  // YE METHOD AAGE ABHI JUST FUNCTION MEIN                                              DEKHOGE //KI ANDAR SE BAHAR KI VALUE ACCESS KR SKTE HO...
// }                                              //LEKIN BAHAR SE ANDAR KI BLOCK SCOPE WALI VALUE ACCESS 
// //                                            // NHI KR SKTE...//BCOZ BAHAR WALI VALUE KO SCPOE GLOBAL HAI



//1.5//UNDERSTANDING FUNTION KE ANDAR FUNCTION AUR USKA SCOPE   

// function one(){
//     const username="Amit"
    
//     function two(){
//         const website="instagram"
//         console.log(username)
//     }

//     console.log(website)

//     two()

// }
//     one()


// YAHA PAR SABSE PEHLE JAVASCRIPT function one() KO DEKHEGA ... AUR ISSE MEMORY MEIN STORE KR DETA HAI... USKE BAAD 
//  one() YE LINE AATI HAI AUR FUNCTION EXECUTE HONA START HOTA HAI
// username="Amit" DEHEGA AUR MEMORY MEIN STORE HO JAAYEGA... ISKE TURANT BAAD
// function two() JS DEKHEGA...  function two() DEFINE HO JAAYEGA... REMEMBER** CHALEGA NHI SIRF DEFINE HOGA... ISKE BAAD
// console.log(website) YE LINE AAYEGI... AUR JS website KI VALUE PEHLE ONE KE SCOPE MEIN DEKHEGA JAHA USSE SIRF
// const username="Amit" YE MILEGA... PHIR BAHAR DEKHEGA (GLOBAL SCOPE MEIN) WAHA BHI NHI MILA THEN ERROR DEGA
//KYOKI Ye website sirf two() ke andar exist karta hai.Bahar se access nahi kar sakte.
// ReferenceError: website is not defined**
// AUR PROGRAM YHI RUK JAAYEGA AUR two() KABHI EXECUTE HE NHI HOGA


// KYOKI BAHAR WALA(PARENT) ANDAR WALA(CHILD) KO ACCESS NHI KR SKTA***//NOT POSSIBLE


//1.5.1//YAHA HAMNE console.log(website) KO HATA DIYA

// function one(){
//     const username="Amit"
    
//     function two(){
//         const website="instagram"
//         console.log(username) // YAHA ANDAR WALA(CHILD) BAHAR WALE(PARENT) KO ACCESS KIYA HAI***//POSSIBLE    
//     }                           // KYOKI EK TARAH SE WO ISKE LIYE GLOBAL SCOPE HO GAYA

//     two()

// }
//     one()

    //OUTPUT:Amit
 
// IS CONCEPT KO Lexical Scope / Closure ka base*** KAHA JATA HAI   
// two() KA USERNAME KO ACCESS KAR PANA  = Lexical Scope
// PARENT FUNCTION KHATAM HONE KE BAAD BHI `USERNAME` KO YAAD RAKH PANA= Closure... WRONG STATEMENT HAI YE
// CLOSURE YE NHI HOTA
// YE COCEPT IF MEIN BHI USE HOTA HAI... AUR BHI BAKKI KAI JAGAH

//1.6// IF KE ANDAR IF AUR USKA SCOPE

// if(true){                               //SABSE PEHLE YE CHALEGA
//     const username="Amit"               // PHIR YE username="Amit"  MEMORY MEIN STORE HO JAAYEGA

//     if(username==="Amit")                // YE CHALEGA... PHIR ANDAR JAYEGA
//         {                                          
//         const website="instagram"         // PHIR YE BHI  website="instagram"  MEMORY MEIN STORE HO JAAYEGA
//         console.log(username+website)     // YE PRINT HO JAAYEGA... OUTPUT:Amitinstagram ISKE BAAD...
//         }

//     // console.log(website)                 // YAHA ERROR DEGA... PROGRAM YHI RUK JAAYEGA
//                                          //SAME: KYOKI BAHAR WALA(PARENT) ANDAR WALA(CHILD) KO ACCESS NHI KR SKTA
// }                                       // AGAR YE LINE console.log(website) HATA DO... TO

// console.log(username)                  // YAHA ERROR DEGA... KYOKI username KI VALUE SIRF PEHLE WAALE if{} SCOPE MEIN HE 
//                                     // DEFINED RAHEGI... JAHA TAK USKE BLOCK KA SCOPE HAI
//                                     //console.log(username) YE IF() BLOCK KE SCOPE KE BAHAR HAI
//                         // SAME YAHA BHI WHI CONCEPT HAI: BAHAR WALA ANDAR WALA KO ACCESS NHI KR SKTA



//2//

// HOISTING:
// JavaScript execution se pehle declarations ko memory me store kar deta hai.


//2.1//FUNCTION DECLARATION 

// console.log(addOne(5))   //OUTPUT:6    //METHOD.1

//     function addOne(num){
//     return num+1
// }


//CONCEPT=> JAVASCRIPT PROGRAM SEEDHA LINE 1(YAHA PAR 178) SE EXECUTE NHI KRTA HAI... 
// JAVASCRIPT KE 2 PHASES HOTE HAI

// 1. MEMORY CREATION PHASE 2.EXECUTION PHASE

//1. MEMORY CREATION PHASE: JAVASCRIPT SABSE PEHLE POORA CODE SCAN KAREGA... TO DEKHEGA
//  function addOne(num){
//     return num+1
// }
// TO POORA FUNCTION MEMORY MEIN STORE HO JATA HAI. addOne=>function

// AB EXECUTION PHASE: AB LINE BY LINE CODE CHALEGA.. YAHA PAR 178 PEHLE CHALEGA... TO addOne(5)
// addOne(5) => PEHLE SE MEMORY MEIN HAI... OUTPUT:6


//2.2//FUNCTION DECLARATION 

//     function addOne(num){
//     return num+1
// }

// console.log(addOne(5))   //OUTPUT:6    //METHOD.2

// YAHA BHI 2.1 JAISA SAME CHIZ HOGA... BAS EXECUTION PHASE MEIN LINE NO.206 SABSE PEHLE CHALEGA... TO 
// addOne() TO PEHLE SE MEMORY MEIN STORE HAI DURING  MEMORY CREATION PHASE... SO CODE SEEDHA 206 PE AA JAYEGA... PHIR SAME OUTPUT:6



// function addOne(){ } 
     //IMP***//
// Function Declaration: PEHLE CALL KR SKTE HO
// Fully Hoisted: ISKA MTLAB FUNCTION PEHLE SE MEMORY MEIN STORE HAI
// Pehle call kar sakte ho



//2.3// FUNCTION EXPRESSION

//2.31// 

        //  const add= function (num){  // YAHA FUNCTION OBJECT KO add VARIABLE ME ASSIGN KIYA GAYA HAI
        //     return num+1                // YE CHAL JAYEGA
        // }

        // console.log(add(5))   //OUTPUT:6 ...SAME AS PREVIOUS ONE

//CONCEPT=> YAHA BHI MEMORY CREATION PHASE MEIN JAVASCRIPT SABSE PEHLE POORA CODE SCAN KAREGA... PHIR DEKHEGA const add TO MEMORY MEIN 
// const add=  uninitialized ... YAHA FUNCTION ABHI ASSIGN NHI HUA HAI

//AB EXECUTION PHASE : MEIN FUNCTION CREATE HOGA AUR add VARIABLE MEIN STORE HO JAYEGA=>
//MEMORY KUCH AISI DIKHEGI AB:       //  add => function(num){
                                    //     return num + 1
                                   //     }   
// AN NEXT LINE... LINE NO.229 CHALEGA... PHIR PROCSESS KE BAAD... OUTPUT:6





//2.32//
                                        //YE NHI CHALEGA
// console.log(add(5))       //Cannot access 'add' before initialization
//                                     // ERROR DEGA
// const add= function (num){     // ISKA REASON HOISTING HAI
//         return num+1
//     }

//CONCEPT=> 2.31 JAISA HE MEMORY CREATION PHASE SAME RAHEGA
                        // const add=  uninitialized

// AB EXECUTION PHASE MEIN : SABSE PEHLI LINE(246 YAHA PAR) CHALEGI... JAVASCRIPT add KO USE KARNA CHAEGA LEKIN ABHI add MEIN FUNCTION STORE NHI HUA HAI...                 
                                //ISLIYE Cannot access 'add' before initialization ERROR DEGA            
                                // AUR PROGRAM YAHI RUK JATA HAI


//const add = function(){ }
         //IMP***//
//Function Expression
// Variable hoist hota hai, function value nahi
// Initialization se pehle call nahi kar sakte






