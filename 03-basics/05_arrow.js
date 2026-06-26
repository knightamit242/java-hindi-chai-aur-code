//2.1//FUNCTION KE SAATH `this`

// function one(){
//     console.log(this)   // global object output aayega
// }
                    
// one()

// CONCEPT: JAVASCRIPT JAB one() DEKTHA HAI.. THEN PUCHTA HAI one() KO KISNE CALL KIYA
// TO YAHA KOI OBJECT HAI NHI
// TO NORMAL FUNCTION KE LIYE JAVASCRIPT KHUD this SET KRTA HAI*** IMPORTANT***




// STRICT MODE MEIN => undefined
// KAI ENVIRONMENTS MEIN => global object
//node.js(non-strict mode) MEIN=> this= global object...
// HENCE OUTPUT: Object [global] { ... }

//2.2//FUNCTION KE SAATH `this`

// function one(){
//     console.log(this.username)   //this.username KROGE TO undefined DEGA
// }
                    
// one()


//3//ARROW FUNCTION

//  const one= ()=> {
//     console.log(this)  // OUTPUT:{}
//  }

// one()

//CONCEPT=> 
//ARROW FUNCTION KE LIYE JAVASCRIPT YEH NAHI DEKHTA KI FUNCTION KO KISNE CALL KIYA,
//KYONKI ARROW FUNCTION APNA `THIS` NAHI BANATA
//WOH BAHAR WALE SCOPE KA `THIS` HI USE KARTA HAI.

// YE FILE KE BAHAR LIKHA REHTA HAI... .
// this= {} //node.js MEIN TOP-LEVEL PAR 
// TO ARROW FUNCTION KO YE MIL GYA... this= {}
// HENCE OUTPUT: {}

//ISKO TUM "BAHAR WALA INVISIBLE THIS"` BHI BOL SKTE HO BEGINNER LEVEL PAR 😄 KYOKI YE TUMHARE PROGRAM MEIN NHI DIKHTA HAI, YE EXECUTION PHASE MEIN DECIDE HOTA HAI.
// BAS ISKA TECHNICAL NAAM **LEXICAL this**/SURROUNDING SCOPE KA this HAI.



//4//ARROW FUNCTION

//4.1// YE RHA NORMAL FUNCTION

// function add(a,b){
//     return a+b
// }

// console.log(add(3,5));

//4.2// AB ARROW FUNCTION

// const add = (a,b) =>{
//       return a+b  
// }

// console.log(add(3,5));

//WHEN ONLY ONE PARAMETER

// const greeting = greet =>{     // yaha () NHI DIYA HAI BCOZ OF ONLY ONE PARAMETER
//     return greet                    //DE DOGE TO BHI CHALEGA AND SAME OUTPUT
// }
//                                     // JAB PARAMETER MULTIPLE HONGE TO () JARURI HAI
// console.log(greeting("hello"))



//4.3//
//return EXPLICITLY NA DE TO
//AGAR RETURN IMPLICIT HO TO

//EXAMPLE

// const add= (a,b)=> a+b   // yaha a+b KO HE IMPLICIT RETURN BOLA JAAYEGA... KYOKI RETURN HAMNE LIKHA NHI 
// console.log(add(3,5));      // return HIDDEN HAI YAHA BOL SKTE HO
                        
//OUTPUT:8



//4.4 OBJECT RETURN KARNA

// const user= ()=> ({username:"Amit"})  //***imp=> {username:"Amit"} ISKO () MEIN DOGE TO CHALEGA

// console.log(user())
// console.log(user.username) // OBJECT NHI HAI JO AISE ACCESS KR LOGE

// user EK FUNCTION HAI,
// OBJECT RETURN KAR RAHA HAI.

// ISLIYE:
// user.username  // undefined
// PEHLE FUNCTION CALL KARO:user().username

// console.log(user().username) // RIGHT APPROACH... FUNCTION HAI













