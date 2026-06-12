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
// const myArray=[1,2,3,"Amit",true,6,87,234]
// myArray.push(1111) //1111 array me include kr dega
// myArray.push(55)   // 55  array me include kr dega

// myArray.pop()      // array se sirf last element hata dega
// console.log(myArray);


//2//
// const myArray=[1,2,3,"Amit",true,6,87,234]
// myArray.unshift(23)  // ARRAY KE STARTING ME ELEMENT INCLUDE KR DEGA
// myArray.shift()      // ARRAY KE STARTING SE EK ELEMENT HATA DEGA

// console.log(myArray.includes(4));

// console.log(myArray.indexOf("Amit"))
// console.log(myArray.indexOf(66))   // JO ELEMENT EXIST NHI KRTI USKA RESULT HAMESHA -1 DEGA

// console.log(myArray);  


//2.1//

// const myArray=[1,2,3,"Amit",true,6,87,234]
// const newArray= myArray.join() // ARRAY KO STRING ME CONVERT KR DEGA
// console.log(myArray)
// console.log(typeof myArray)
// console.log(newArray);
// console.log(typeof newArray);



//3// SPLICE AND SLICE

// SLICE = DOES NOT MODIFY ORIGINAL ARRAY.
// SPLICE = MODIFIES ORIGINAL ARRAY.

//3.1// SLICE

// const myArray=[1,2,3,4,5]
// console.log("A",myArray)

// const newArray= myArray.slice(1,4) // START FROM INDEX 1 AND PRINT UP TO INDEX 3.
//                                   //  INDEX 4 WILL BE EXCLUDED 

// console.log("Slice krne ke baad wala array=",newArray);
// console.log("B",myArray)  

//SPLICE

const myArray=[1,2,3,4,5,6]
console.log("A",myArray)

const newArray= myArray.splice(1,3) // START FROM INDEX 1 AND REMOVE 3 ELEMENTS FROM THE ARRAY
                                   //  JIS ARRAY ME SPLICE LAGA USME SE  
                                  //  JAHA SE START HUA... WHI SE ELEMENT REMOVE HONA START HOGA
                                //    REMOVED ELEMENT PRINT HONGE... AUR PHIR WHI ELEMENT NAYE MODIFIED   ARRAY ME NHI DIKHENGE
console.log("Slice krne ke baad wala array=",newArray);
console.log("B",myArray)  




