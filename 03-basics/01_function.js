
// FUNCTION BASIC =>PART 1

//1.1//
//FUNCTION EK BLOCK OF CODE HOTA HAI
//JISE HUM EK BAAR LIKHTE HAIN
//AUR JAB CHAHE TAB CALL (RUN) KAR SAKTE HAIN.

//1.2// FUNCTION KE BINA

// console.log("HELLO AMIT")
// console.log("HELLO AMIT")
// console.log("HELLO AMIT")
// console.log("HELLO AMIT")


//1.3// FUNCTION KE SAATH

// function sayMyName (){

//         console.log("HELLO AMIT")
// }

// sayMyName()
// sayMyName()
// sayMyName()
// sayMyName()


//1.4// BASIC SYNTAX//

// function functionName(){
//       //code
// }
// functionName()


//1.4.1//

// function greeting(){

//         console.log("hello Amit")
// }

// greeting()
// greeting()



// FUNCTION BASIC =>PART 2

//PARAMETERS AUR ARGUMENTS

//2.1//PARAMETER//

// function greet(name){      // FUNCTION PARAMETER // Amit name MEIN STORE HO JAAYEGA
//                             // => name="Amit"
//     console.log(name)         // ISLIYE YE "Amit" OUTPUT DEGA
// }

// greet("Amit")      //FUNCTION CALL// "Amit" YAHA ARGUMENT HAI

//CONCEPT USED HERE//
// FUNCTION CALL KARTE TIME JO VALUE PASS KI JATI HAI USE ARGUMENT KEHTE HAIN.
// YE VALUE FUNCTION KE PARAMETER ME STORE HO JATI HAI.
// AGAR greet("AMIT") CALL KIYA JAYE TO name = "AMIT" HO JATA HAI.
// ISLIYE console.log(name) KA OUTPUT "Amit" AATA HAI.




//3// MULTIPLE PARAMETER//

//3.1//

// function add(num1,num2)
// {
//         console.log(num1+num2)
// }

// add(10,20)           // FUNCTION AUTOMATICALLY undefined RETURN KAREGA
                        // LEKIN HUM US RETURNED VALUE KO USE/PRINT NHI KAR RHE


//3.2//

// function add(num1,num2)
// {
//     console.log(num1+num2)
//                                 //TUM YAHA RETURN VALUE NHI DOGE... THEN JAVASCRIPT AUTOMATICALLY 
// }                              // undefined RETURN KAR DEGA

// console.log(add(10,20))    //AB 30 KE NICHE undefined BHI PRINT HOGA... KYOKI console RETURN VALUE
//                             // KO PAKAD LETA HAI





//4//RETURN

//4.1//Galat Tarika

// function add(num1,num2)
// {
//         console.log(num1+num2)
// }

// const result= add(10,20)

// console.log(result)   //30 AUR undefined PRINT HOGA


//CONCEPT USED HERE//
 //add(10,20) PARAMETER MEIN PAAS HOGA... THEN num1=10 and num2=20 HO JAYEGA
 // THEN console.log(num1+num2) CHALEGA AUR 30 PRINT HO JAAYEGA =>1ST OUTPUT

 //USKE BAAD HUMNE RETURN KI VALUE NHI DI HAI ISLIYE JAVASCRIPT undefined RETURN KAR DEGA
 // AB KYOKI HAMNE console.log(result) DIYA HAI TO 
 // result ME undefined STORE HO JAYEGA
// console.log(result) US undefined KO PRINT KAR DEGA

 //THEN const result= undefined HO JAAYEGA

//console.log(result) WILL PRINT =>undefined =>SECOND OUTPUT

//30
//undefined




                            //CONCEPT//*** 
//1// AGAR SIRF OUTPUT DIKHANA HAI TO console.log() MT LIKHO THEN UNDEFINED NHI DEGA.
// YE KRO=>FUNCTION KO DIRECT CALL KARO.

// FUNCTION undefined RETURN KAREGA
// LEKIN AGAR US RETURNED VALUE KO PRINT NAHI KAROGE TO undefined DIKHEGA NAHI

//2// AGAR VALUE KO FUNCTION KE BAHAR USE KARNA HAI TO return USE KARO.
// return NAHI LIKHOGE TO FUNCTION AUTOMATICALLY undefined RETURN KAREGA.    

//3// return value KO FUNCTION KE BAHAR WAPAS BHEJTA HAI.

//4// return KE BAAD FUNCTION AAGE NHI CHALTA... WHI STOP HO JATA HAI 
// AGAR CODE return KE AAGE LIKHA BHI HUA HAI...TO BHI NHI CHALTA HAI



// //4.2//SAHI TARIKA  (RETRUN KE SAATH)

// function add(num1,num2)
// {
//     return(num1+num2)
// }

// const result= add(10,20)
// console.log(result)          //OUPUT:30




//4.3//RETURN KE BAAD KUCH NHI CHALTA HAI//

function add(num1,num2)
{
    return(num1+num2)            // FUNCTION YHI KHTM HO JAAYEGA
    console.log("hello ")
    console.log("RETURN KE BAAD HUME KOI DEKHTA HE NHI")
}

console.log(add(10,20))
