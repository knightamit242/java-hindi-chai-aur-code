//1//map BHI filter JAISE HE HAI... SYNTAX SAME...  ONLY WORKING IS DIFFERENT

//1.1//
//WORKING DIFFERENCE IS:
// FILTER
// → ELEMENT KO RAKHNA YA HATANA

// MAP
// → ELEMENT KO BADALNA... YAHA SIRF ELEMENT BADALTE HAI/MODIFY HOTE HAI AUR PHIR NEW ARRAY MILTA HAI*** 


//1.2//
// const nw=[1,2,3,4].map(item => item*10) 
// console.log(nw)         //[ 10, 20, 30, 40 ]


// const nw=[1,2,3,4].map((item)=> item>2)  
// console.log(nw)          //[ false, false, true, true ] //YE NAYA ARRAY DE DIYA MODIFY KARKE
//                     //KYOKI 'item>2' YE CONDITION KE LIYE DEFINE NHI HUI HAI map method BANATE TIME
//                     // YE MODIFY KRNE KE LIYE DEFINE HUI HAI




//2//MAP UNIQUE THING// THIS CALLED CHAINING

//2.1//map MEIN map USE KARNA
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNum= myNum
//         .map((item)=>{
//         return item*10         
//               })
//         .map((item)=>{
//         return item+1
//               })

// console.log(newNum)

//2.11// SAME CHIZ AISE BHI LIKH SKTE HO
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNum=myNum
//          .map((item)=>item*10)
//          .map((item)=>item+1)

// console.log(newNum);


//3//using MORE METHOD//YAHA filter BHI USE KR LIYA
// const myNum = [1, 2, 3, 4, 5, 6, 7, 8]

// const newNum=myNum
//         .map((item)=> item*10)
//         .map((item)=>item+1)
//         .filter((item)=>item>40)

// console.log(newNum)


//4//✅ Chaining ka matlab:

// Pehle map ka result
// ↓
// Doosre map me input ban jata hai
// ↓
// Phir filter, map, etc. laga sakte ho