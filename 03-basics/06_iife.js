// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// function one(){
//     console.log("used in database process")  // YE NORMAL FUNCTION
// } 


//USING IFEEE NOW

//wrong//1.1//
// function one(){
//     console.log("used in database process")   // NHI CHALEGA KYKOI PARENTHESIS () MEIN NHI DIYA
// } ()                                          


//right//1.2//
// (function one(){     // FUNCTION KA NAAM one HAI TO ISKO "NAMED IIFE" BOLENGE
//         console.log("used in database process")
// })()                                              //OUTPUT:used in database process


//2//

// (() => {                        // UNNAMED IFEEE... FUNCTION KA KOI NAAM NHI HAI YHA PAR
//     console.log("UNDERSTANDING UNNAMED IFEEE")  
// })()                            //OUTPUT:UNDERSTANDING UNNAMED IFEEE
                                            // TECHNICALLY ANONYMOUS IIFE BOLTE HAI

//2.1// PASSING VALUES LIKE NORMAL FUNCTION

// ((name) =>{       //PARAMETER
//     console.log(`my name is ${name}`)
// })("Amit")       // ARGUMENT


//3// UNDERSTANDING ; IMPORTANCE

// (function one(){
//     console.log("hello")
// }) () ;                       // AGAR ; NHI DOGE TO YE POORA CODE NHI CHALEGA... KYOKI EK IIFE KE BAAD
//                                 //TURANT DUSRA IFEE AA RHA HAI
// (() =>{
//     console.log("hi")
// }) ()

//3.1//

// (function one(){
//     console.log("hello")
// }) () ;                       // AGAR ; NHI DOGE TO YE POORA CODE NHI CHALEGA... WHEN EK KE BAAD EK
//                                     // IIFE USE HUE HAI
// (function two(){                          
//     console.log("hello again amit ji")   // HERE BOTH function ARE IIFE
// }) ()                       

//CONCEPT//

// Semicolon previous statement ko terminate karta hai.
// Taaki JavaScript next IIFE ko previous code ka part na samjhe.

// IIFE = Immediately Invoked Function Expression

// 1. Function ko define karte hi turant execute karna.
// 2. Function ko () me wrap karte hain taaki wo expression ban jaye.
// 3. Last me () laga kar turant call kar dete hain.
// 4. Named IIFE aur Anonymous (Unnamed) IIFE dono ho sakte hain.
// 5. Multiple IIFE likhte waqt ; lagana achchi practice hai.