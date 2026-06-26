//1//  

//1.1// UNDERSTANDING "this" KEYWORD

// const user={
//     username: "Amit",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${user.username}, welcome to website`)
//     }

// }

// user.welcomeMessage()                 
// user.username = "Tom"           OUTPUT: //Amit, welcome to website   
// user.welcomeMessage()                  // Tom, welcome to website                     



//1.2// USING "this"

// const user={
//     username: "Amit",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//     }

// }

// user.welcomeMessage()
// user.username = "Tom"              //SAME OUTPUT:   //Amit, welcome to website  
// user.welcomeMessage()                              // Tom, welcome to website 


//usrname KI VALUE CHANGE KR DI.. TO JAB DOOSRI BAAR FUNCTION CALL HOGA... TAB CHANGE WAALI HE VALUE AAYEGI
                      // TO  // Tom, welcome to website// OUTPUT DEGA



//1.3//YAHA "this" SAMJH AAYEGA

// const user={
//     username: "Amit",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)    // YAHA HAMNE THIS KEYWORD DIYA TO YE POORA OBJECT PRINT KR DEGA ACCORDING 
//     }                     // TO ABHI JO VALUES HAI                  
                        
// }                        // TO YAHA PAR 2 BAAR FUNCTION CALL HUA HAI EK BAAR username WHI HAI... PHIR EK
//                          // BAAR username Tom HO GYA HAI 
// user.welcomeMessage()     // TO DONO BAAR OBJECT KI JO CURRENT VALUES HAI... this WHI PRINT KAREGA
// user.username = "Tom"             
// user.welcomeMessage()                       


//1.3 MEIN MEMORY CREATION PHASE SAMJHANE MEIN DOUBT ???? YAHA SMAJHO=>>

//CONCEPT=> 
// Memory Creation Phase (Global Execution Context)

// JavaScript poori file ko scan karta hai.

// Line 1
// const user = ...

// Ye ek const variable declaration hai.

// Memory phase mein:

// user -> <uninitialized>

// Bas itna hi.

// Object create nahi hota.
// username create nahi hota.
// price create nahi hota.
// welcomeMessage function object bhi create nahi hota.

// Kyun?

// Kyuki ye sab object literal ke andar ki values hain, aur object literal evaluate tab hota hai jab execution us line tak pahunchta hai.

// Memory ka exact snapshot

// GLOBAL MEMORY

// user -> <uninitialized>

// Bas.

// Aur kuch nahi.

// Kya ye hoga?
// user -> {
//   username: "Amit",
//   price: 999,
//   welcomeMessage: function(){...}
// }

// ❌ Nahi.

// Ye Execution Phase mein hoga.

// Kya ye hoga?
// user.username -> <uninitialized>
// user.price -> <uninitialized>

// ❌ Nahi.

// Object properties ke liye alag hoisting ya memory entries nahi banti.

// Kya ye hoga?
// welcomeMessage -> function(){...}

// ❌ Nahi.

// Ye function declaration nahi hai.

// Ye object ke andar ek function expression/value hai.

// Function declaration hota:

// function welcomeMessage() {}

// Tab Creation Phase mein poora function memory mein aa jata.

// Lekin tumhare code mein:

// welcomeMessage: function() {}

// ye object ki property value hai.





// Final Answer (100% Technical)

// Memory Creation Phase ke end par:

// Global Memory
// user -> <uninitialized>

// Bas itna hi.

// Na object bana hai,
// na username,
// na price,
// na welcomeMessage function object.

// AUR ISLIYE YE PROGRAM ERROR DEGA

// user.welcomeMessage()

// const user = {
//     username: "Amit",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }
// }
// ERROR: Cannot access 'user' before initialization //OBVIOUSLY...😄 YHI TO PADHA ABHI



//1.4//UNDERSTANDING "this" MORE

//1.41//
// const user={
//     username: "Amit",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this);
        
//     }

// }                  // EXECUTION PHASE MEIN SABSE PEHLE LINE NO.189 CHALEGI
//                  // YAHA HAMNE FUNCTION CALL NHI KIYA HAI user.welcomeMessage()

// console.log(this) // OUTPUT:{} EMPTY OBJECT DEGA YAHA PAR(VS CODE) MEIN. KYOKI YE SCOPE KE BAHAR HAI
//                  // AUR BROWSER KE console MEIN Window {...} DEGA

//CONCEPT=> YAHA PAR SABSE PEHLE MEMORY CREATION PHASE MEIN => user -> <uninitialized> baas... 
// ISKE BAAD EXECUTION PHASE MEIN user MEIN AB Object STROE HO JAAYEGA... FUNCTION DEFINE HO JAAYEGA ONLY.... THEN...LINE NO.189 CHALEGI... KYOKI YE FUNCTION KE BAHAR HAI... TO this KE LIYE GOLBAL SCOPE MEIN ABHI KUCH NHI HAI/ISKA CURRENT CONTEXT KUCH NHI HAI/"this" KEYWORD KE LIYE REFER KRNE KE LIYE KUCH NHI HAI... TO YE EMPTY OBJECT {} PRINT HOGA






// EK IMPORTANT BAAT//

// TOP LEVEL this (Node.js)
// => {}

// NORMAL FUNCTION CALL
// => global object (non-strict mode)

// OBJECT METHOD CALL
// => this = object


//ISKA EK EXAMPLE//
// console.log(this)       // {}

// function test(){
//     console.log(this)   // global object
// }
// test()

// const user = {
//     name: "Amit",
//     show() {
//         console.log(this) // user object
//     }
// }

// user.show()




//1.42//
// const user={
//     username: "Amit",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this);
        
//     }

// }

// user.welcomeMessage()  // YAHA HAMNE FUNCTION CALL KR DIYA HAI
// console.log(this)

//CONCEPT=> FUNCTION CALL HONE KE BAAD... LINE NO.237 ME JAAYEGA... OUTPUT: Amit, welcome to website

//console.log(this)=> YAHA LINE NO. 239...

// FUNCTION KO CALL KISNE KIYA?... USER NE KIYA... TO... this=user...
// MEMORY MEIN KUCH AISA HO JAAYEGA... console.log(user)
// POORA OBJECT PRINT HO JAAYEGA...

//ISKE BAAD LINE NO.246... console.log(this) CHALEGA... ALREADY EXPLAINED ABOVE// OUTPUT:{}




//IMPORTANT*** => "this" KA MATLAB FUNCTION KIS OBJECT KE THROUGH CALL HUA HAI, 
            // US OBJECT KO REFER KRTA HAI//*** 



//1.5// INTERESTING CASE//

// const user={
//     username: "Amit",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username},welcome to website`) // OUTPUT:undefined,welcome to website
//     }
// }

// const fun=user.welcomeMessage 

// fun()   

//CONCEPT=> 
// const fun=user.welcomeMessage MEIN SIRF FUNCTION KA REFERNCE fun MEIN STORE KR DO...
// CALL NHI HOGA KYOKI user.welcomeMessage KE AAGE () NHI LAGA HAI...

// AB fun === user.welcomeMessage AISA HO JAYEGA MEMORY MEIN. ***IMPORTANT***
// OR PROFESSIONALLY:fun aur user.welcomeMessage dono same function object ko reference karte hain.


// AB EXECUTION PHASE MEIN SABSE PEHLE YE LINE CHALEGI.... fun()

// TO console.log(`${this.username},welcome to website`) 

// YAHA PAR this KI VALUE UNDEFINED AYEGI(STRICT MODE MEIN)***
//  GLOBAL OBJECT MIL SAKTA HAI (NODE.JS)MEIN.***
// BCOZ=> USER. GAYAB HO GAYA TO JAVASCRIPT KE PAAS KOI OBJECT NAHI HAI JISE this BANAYE.
// ISLIYE this user OBJECT KO REFER NAHI KAREGA.


// Isi ko log bolte hain:

// > **"this depends on HOW the function is called, not where the function is written."** 🔥

// Function object ke andar likha hai ye important nahi hai.

// Function ko **kis tarike se call kiya gaya hai**, usse `this` decide hota hai.

// ki this ki value kya hogi 




//1.6//
// const user={
//     username: "Amit",
//     price:999,

//     welcomeMessage: function(){
//         console.log(this)    //YAHA TUM node.js USE KR RHE HO ISLIYE... this = global object (Node.js)
//     }                         //this user object ko refer nahi karega... YE HAR ENVIORONMENT
                                                    // MEIN SHI STATEMENT HAI
// }            //Isliye console.log(this) ne Node ka poora global object print kar diya.
//                 //jo ki ye hai :Object [global] { ... }

// const fun=user.welcomeMessage 
// fun()   


//this = global object (Node.js)
// Modern Node.js modules me har situation me ye guaranteed nahi hai.
// Is example me result environment par depend karta hai.

//1.6.1//

// const user={
//     username: "Amit",
//     price:999,

//     welcomeMessage: function(){
//         console.log(this.username)   // AB AGAR this.username KR DO... TO
//     }                               // OUTPUT: undefined
// }            
// const fun=user.welcomeMessage 
// fun()   

//CONCEPT=> YAHA this.username MTLAB global.username


// FUNCTION KO SIRF FUN() SE CALL KIYA GAYA HAI,
//  ISLIYE this user OBJECT KO REFER NAHI KAREGA;
//  NODE.JS ME YEH GLOBAL OBJECT KO REFER KARTA HAI,
//  AUR KYONKI global.username MEIN AB JAVASCRIPT global object MEIN username NAAM KI PROPERTY
// DHHONEGA... AUR USSE NHI MILGA... KYOKI WO TO EXIST NAHI KARTA, TO AB...
// global.username-> <undefined>
//  ISLIYE OUTPUT undefined AATA HAI.







