// for of

//1.1//
//ARRAY, STRING JAISI ITERABLE VALUES KE ELEMENTS KO
// EK-EK KARKE ACCESS KARNE KE LIYE USE HOTA HAI.
//FOR...OF VALUE DETA HAI, INDEX NAHI DETA**

// ARRAY AUR STRING PAR CHALTA HAI
// OBJECT PAR DIRECT NAHI CHALTA*****
// BREAK AUR CONTINUE USE KAR SAKTE HAIN.


//1.2//SYNTAX

// for(const value of iterable){
//     //value                    value WO HOTA HAI JO TUMHE PRINT KARANA HAI
// }                            //iterable MTLAB JISME SE VALUE LENI HAI OR ITERATE KARANI HAI



//1.3//ARRAY KE SAATH

// const array=[1,2,3,4]

// for(const val of array){
//     console.log(val)
//     }
//OUTPUT:1
     //  2
     //  3
     //  4




//1.4//
// const array=[1,2,3,4]

// for(const val of array){
//     console.log(val)                                // pehle ye chalega 
//     console.log(`values of the array is ${val}`)       // phir ye line chalegi
//     }                                            // aise he 4 baar chaelga loop mein



//1.5//STRING KE SAATH

// const name= "AMIT"
// for(const ch of name){
//     console.log(ch)
// }



//2//MAP
// MAP IS A OBJECT AND DOES NOT ALLOW DUPLICATE VALUE LIKE OBJECT... ALSO REMEMBER THE ORDER

//2//
const map =new Map()
map.set('in','india')
map.set('usa','america')
map.set('fr','france')

// console.log(map)

//2.1//
// for(const val of map){
//     console.log(val)    //YE POORA MAP DE DEGA... KEY AUR VALUE EK BAAR MEIN    
// }

//2.1//MORE SUITABLE WAY
// for(const [key,value] of map){
//     console.log(key,':',value);     //UNIQUE METHOD
// }


//MAP EK SPECIAL TYPE KA OBJECT HOTA HAI JO 'for of' SE ITERABLE HO SKTA HAI***
//LEKIN NORMAL OBJECT 'for of' SE ITERABLE NHI HO SKTA***


//3//FOR...OF vs FOR...IN DIFFERENCE*****

// FOR...OF → VALUE DETA HAI
// FOR...IN → KEY / INDEX DETA HAI... VALUE NHI



//4//FOR IN LOOP

//CONCEPT=>
//OBJECT KE KEYS KO ACCESS KARNE KE LIYE USE HOTA HAI.
//OBJECT KE SAATH ZYADA USE HOTA HAI
// VALUE KE LIYE:
// object[key]

// ARRAY PAR CHAL SAKTA HAI,
// LEKIN INDEX RETURN KARTA HAI
// VALUE KE LIYE:
// array[index]


//4.1//SYNTAX

// for(const key in object){
//     //code
// }


//4.2//OBJECT KE SAATH

// const user={

//     name:"Amit",
//     age: 22,
//     email: "amit@google"

// }

// for(const key in user){          //key SIRF NAAM HAI... TUM KUCH BHI NAAM LIKH SKTE HO
//     console.log(key);               //BAS YAHA BHI SAME HONA CHAHIYE
     
// } 

//OUTPUT: 
// name
// age
// email
//BCOZ 'FOR IN' SIRF KEY DETA HAI


//4.3// VALUE AISE LAOO?

// const user={
//     name:"Amit",
//     age:22,
//     email:"amit@google"
// }

// for(const value in user){
//     console.log(user[value])       //VALUES AISE PRINT KARA SKTE HO
// }                                       // SIMPLE HAI


//4.4// KEY AUR VALUES EK SAATH PRINT KARANA HO... OBJECT KE TOH

//SIMPLE

// const user={
//     name:"Amit",
//     age:22,
//     email:"amit@google"
// }

// for(const entries in user){
//     console.log(entries,user[entries]) // BAS YAHA PE CHANGES HAI.... BAAKI SAME 
// }


//4.5// ANOTHER SIMPLE EXAMPLE //KUCH NHI... BAS.. BACKTICK USE KR LIYA

// const user={
//     name:"Amit",
//     age:22,
//     email:"amit@google"
// }

// for(const entries in user){
//     console.log(`${entries} : ${user[entries]}`)
// }



//5//ARRAY KE SAATH  //YAHA BHI KEY DEGA BUT HUM UPAR WAALE APPROACH SE VALUE LAA LENGE

//5.1//
// const user=["amir","amit","harsh","satyam","pokki"]

// for(const value in user){
//     //console.log(value)         // 0,1,2,3,4... ARRAY KE INDEX DEGA

//     console.log(user[value])     // VALUES YE DEGA
// }


//ANOTHER SIMPLE EXAMPLE //KUCH NHI... BAS.. BACKTICK USE KR LIYA

// const user=["amir","amit","harsh","satyam","pokki"]

// for(const key in user){
//     console.log(`value of array is ${user[key]}`)
// }


// `for in` Map() PE NHI CHALEGA... JUST REMEMBER



// ONE EXAMPLE

// const user=[1,2,3,4,5,6,7]

// for (const value in user){
//     console.log(user)        //YAHA TUMNE user DIYA HAI... TO YE TO POORA ARRAY HAI....
// }                     // AUR KYOKI FOR IN LOOP MEIN HAI TO 7 BAAR CODE CHALEGA... SINCE 7 INDEX HAI
                         // ... AUR KYOKI TUMNE 
                         // user DIYA HAI TO 7 BAAR array PRINT HO JAAYEGA




// SAME FOR OBJECT TOO

// user={name:"Amit", age:22}

// for (const key in user)
//      console.log(user.name)  // YAHA 2 KEY HAI... TO YE CODE 2 BAAR CHALEGA...
//                               //  AUR OUTPUT: Amit
//                                             //Amit



// user={name:"Amit", age:22}

// for (const key in user)
//      console.log(key)   // AB DEGA ACTUAL JO key hai ... THAT IS name age 