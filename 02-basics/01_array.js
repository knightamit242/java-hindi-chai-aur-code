//array//

// const myArray=[1,2,3,"Amit",true,6,87,234]
// console.log(myArray)
// CONSIST DIFFERENT TYPES OF ELEMENT LIKE BOOLEAN,STRING,NUMBERS ETC... MIX OF DATA TYPES
// RESIZABLE... BAAD ME ARRAY MEIN KUCH INCLUDE KR SKTE HAI...    RESIZABLE
//  INDEXING... 0 SE SURU HOTI HAI... ELEMENT KO ACCESS INDEX KE HELP SE KRTE HAI


//1// MAKING NEW ARRAY
// const myNewArray= new Array(1,2,3,4,5,"Amit",true)
// console.log(myNewArray);
// console.log(typeof myNewArray);




//ARRAY METHODS//

//push//
//1//

//1.1//
// const myArray=[1,2,3,"Amit",true,6,87,234]

// console.log(myArray.push(11)) // OUTPUT:9 // // RETURNS NEW LENGTH OF ARRAY AFTER PUSHING

// console.log(myArray) // RETURNS UPDATED ARRAY // 11 ARRAY KE LAST MEIN HE ADD HOGA

// console.log( myArray.push(55)); // OUTPUT:10


//1.2// ARRAY SE SIRF LAST ELEMENT HATANE KE LIYE .pop() METHOD USE HOGA.
//() ISME KUCH VALUE NHI PASS KRTE YAHA...LIKE PUSH

// const myArray=[1,2,3,"Amit",true,6,87,234]
// console.log(myArray.pop())      //OUTPUT:234 //RETURNS REMOVED VALUE OF THE ARRAY***
// console.log(myArray);      //UPDATED ARRAY DEGA WITHOUT 234

//1.3//
// const arr = [1,2,3,4]
// arr.pop()                 //OUTOUT:KUCH NHI KYOKI OUTOUT PRINT NHI KARAYA...//LEKIN APNA KAAM
                            // KR DEGA THAT IS arr SE EK(LAST ELEMENT) REMOVE KR DEGA
// console.log(arr)        // OUTPUT:[ 1, 2, 3 ]

//2//
//2.1//
// const myArray1=[1,2,3,"Amit",true,6,87,234]
// myArray.unshift(23)  // ARRAY KE STARTING ME ELEMENT INCLUDE KR DEGA
// myArray.shift()      // ARRAY KE STARTING SE EK ELEMENT HATA DEGA

// 2.2//unshift//
// const myArray=[1,2,3,"Amit",true,6,87,234]

// console.log(myArray.unshift(11)) // OUTPUT: 9 // ARRAY KI LENGTH RETURN KAREGA AFTER unshift

// console.log(myArray)   //OUTPUT: [ 11, 1, 2, 3, 'Amit', true, 6, 87, 234 ]
          

//2.3//shift//() KUCH PASS NHI KRTE
// const myArray=[1,2,3,"Amit",true,6,87,234]

// console.log(myArray.shift()) //OUTPUT:1

// console.log(myArray)    //OUTPUT: [ 2, 3, 'Amit', true, 6, 87, 234 ]


//2.4//
// const myArray=[1,2,3,"Amit",true,6,87,234]

// myArray.unshift(11) //OUTOUT:KUCH NHI KYOKI OUTOUT PRINT NHI KARAYA...//LEKIN APNA KAAM
//                             // KR DEGA THAT IS 'myArray' ME EK ELEMENT ADD KR DEGA

// console.log(myArray)    //OUTPUT: [ 11, 1, 2, 3, 'Amit', true, 6, 87, 234 ]


//2.5//
// const myArray=[1,2,3,"Amit",true,6,87,234]

// console.log(myArray.includes(4));

// console.log(myArray.indexOf("Amit"))
// console.log(myArray.indexOf(66))   // JO ELEMENT EXIST NHI KRTI USKA RESULT HAMESHA -1 DEGA

// myArray.unshift(4)

// console.log(myArray);  


//2.6//

// const myArray=[1,2,3,"Amit",true,6,87,234]
// const newArray= myArray.join() // ARRAY KO STRING ME CONVERT KR DEGA AND..
// console.log(myArray)           // ORIGINAL ARRAY KO MODIFY NAHI KARTA
// console.log(typeof myArray)
// console.log(newArray);
// console.log(typeof newArray);



//3// SPLICE AND SLICE

// SLICE = DOES NOT MODIFY ORIGINAL ARRAY... EK NAYA ARRAY BANATA HAI AUR USME RESULT DETA HAI
// SPLICE = MODIFIES ORIGINAL ARRAY LIKE PUSH,POP,UNSHIFT,SHIFT

//3.1// SLICE

// const myArray=[1,2,3,4,5]
// console.log("A",myArray)

// const newArray= myArray.slice(1,4) // START FROM INDEX 1 AND PRINT UP TO INDEX 3.
//                                   //  INDEX 4 WILL BE EXCLUDED 

// console.log("Slice krne ke baad wala array=",newArray);
// console.log("B",myArray)  

//3.2//SPLICE

// PEHLI VALUE POSITIVE YA NEGATIVE HO SKTI HAI
// DOOSRI VALUE DELETE COUNT HOTI HAI (AAM TOR PAR 0 YA POSITIVE)


//3.3//
// const myArray=[1,2,3,4,5,6]
// console.log("A",myArray)

// const newArray= myArray.splice(1,3) // START FROM INDEX 1 AND REMOVE 3 ELEMENTS FROM THE ARRAY
//                                    //  JIS ARRAY ME SPLICE LAGA USME SE  
//                                   //  JAHA SE START HUA... WHI SE ELEMENT REMOVE HONA START HOGA
//                                 //    REMOVED ELEMENT PRINT HONGE... AUR PHIR WHI ELEMENT NAYE MODIFIED   ARRAY ME NHI DIKHENGE
// console.log("Slice krne ke baad wala array=",newArray);
// console.log("B",myArray)  

//3.4// 
const arr = [1,2,3,4,5]
console.log(arr.slice(-3))

//SAME STRING SLICE WALA METHOD USE HOGA
// LENGTH:5 SO... 5-3=2 
// 2 SE END TAK SAB PRINT HO JAAYEGA
// OUTPUT: [3,4,5]


