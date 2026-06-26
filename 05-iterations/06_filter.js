//1//
// LEKIN AGAR array.forEach KO KISI VARIABLE MEIN DAAL DE... TO YE undefined RETURN KRTA HAI
//KYOKI YE FUNCTION HAI TO YE KUCH TO return KAREGA... LEKIN YAHA SIRF undefined HE RETURN KRTA HAI BAS..

//EXAMPLE

// const array=[1,2,3,4]

// const value=array.forEach((item)=>{
//     console.log(item)
//     return 0                 //undefined HE DEGA ABHI BHI
// })

// console.log(value)     //undefined

//ALSO YAHA... AGAR HAME '2' KO CHHOR KR BAAKI SAB PRINT KARANA HO TO... HUM NHI KR SKTE...
// OR HAME KOI EK HE ELEMENT CHAHIYE ... THAT'S ALSO NOT POSSIBLE
// SINCE WE CANT USE CONTINUE... AND BREAK TOO HERE...

// ALSO RETURN WALA PROBLEM

//IMPORTANT:forEach()
// → iske andar callback function hota hai,
// isliye return ki baat aati hai.

// for...of
// → callback function nahi hota.

// for...in
// → callback function nahi hota.

// Isliye return wala discussion mostly forEach(), map(), filter() jaise methods me hota hai.


//IMP***=> YE THA HAMARA PROBLEM AUR IS PROBLEM KO SOLVE KAREGA filter()



//2//filter()

//2.1//FILTER KYA HAI?

// FILTER ARRAY KE ELEMENTS KO CHECK KARTA HAI
// AUR JO CONDITION TRUE HOTI HAI
// UNHI KO NAYE ARRAY MEIN RAKHTA HAI.

//filter() : → NAYA FILTERED ARRAY RETURN KARTA HAI*** //IMP// 
// ISKA MATLAB YE HUA: EXISTING ARRAY MEIN CHANGES KROGE... AUR PHIR USI KO PRINT KROGE.... AISA NHI.
// CHANGES NHI DIKHENGE.. POORANA WALA ARRAY HE DIKHEGA
//NAYA VARIABLE BANAOGE... USME filter KO STORE KAROGE... PHIR US NAYE VARIABLE KO PRINT KROGE TO 
// CHANGES DIKHENGE


//RETURN LIKHNA ZAROORI HAI...(JAB {} USE KAR RAHE HO)*****


//2.2// QUESTION//

// const myArray=[1,2,3,4,5,6]

// const newArray=myArray.filter((values)=> values>2)   //YAHA {} NHI USE KIYA HAI... TO RETURN NHI DIYA 
// console.log(newArray)                                                   //TO BHI CHAL GAYA
// OR
//console.log(myArray.filter((values)=> values>2))

//SYNTAX//2.3//

// const newArray= array.filter((item)=>{        // {} ISSE BHI KR SKTE HO
//     return condition                         // LEKIN PHIR return EXPLICITLY LIKHNA PADEGA
// })

//


//BASIC EXMAPLE//2.4//

// const num=[1,2,3,4,5]

// const newArray=num.filter((value)=>{
//     return value>3                    //YAHA RETURN NHI DOGE TO... OUTPUT:[]
// })

// console.log(newArray)



//2.5//ARRAY OF OBJECTS

// const user=[
//     {name:"Amit", age:22},
//     {name:"Rahul", age:17},
//     {name:"Ravi", age:25}
// ]

// const newArray=user.filter((val)=>{
//     return val.age>18
// })

// console.log(newArray)

//3//SEEING DIFFERNCE BETWEEN WHEN USING Filter METHOD AND WHEN NOT USING Filter METHOD

//3.1//ANOTHER QUESTION//USING Filter METHOD 

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newArray=array.filter((values)=>{
//     return values>4
// })

// console.log(newArray)


//3.2//WHEN NOT USING Filter METHOD

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// newArray=[]

// array.forEach((values)=>{
//         if(values>4){
//         newArray.push(values)
//         }
// })

// console.log(newArray)




//4//REAL-WORLD QUESTION

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

// const newArray=books.filter((bks)=>{
//        return bks.genre=='Non-Fiction' 
// })                                    //SIRF NON-FICTION WAALE OBJECTS/VALUES NEW ARRAY MEIN DEGA
// console.log(newArray)               //YHI CHIZ... FOREACH,FOROF,FORIN MEIN NHI THI...


// const newArray=books.filter((values)=> values.genre=='Science'&& values.publish>=2000)
// console.log(newArray)   





//5//FILTER IMPORTANT CONFUSING PART

//5.1//
const nw=[1,2,3,4].filter(item => item * 10)      //AISE BHI DIRECT ARRAY LIKH SKTE HO.. NORMAL HAI

console.log(nw)  //OUTPUT:10,20,30,40 NO...       <=IMPORTANT
//HERE OUTPUT:[1,2,3,4]

//PROGRAM RUN KAISE KAREGA...??
//1 ROUND SAMJH LO... BAAKI SAB WAISE HE HAI 

//ROUND:1: SABSE PEHLE PEHLA item HOGA item=1,
// NOW CONDITION MEIN JAAYEGA... 1*10=10 DEGA
// AB DEKHEGA 10 TRUE HAI OR FALSE... KYOKI YAHA  CONDITION CHECK HO RHI HAI
// boolean(10)... TO TRUE...TO JS BOLEGA 1 KO RAKH LO...
// SAME YHI PROCESS HAR ROUND MEIN REPEAT HOGA


//5.2//
//filter ko TRUE ya FALSE chahiye.
// Agar tum direct TRUE/FALSE nahi dete,
// to JavaScript returned value ko Boolean me convert karke check karta hai.


//5.3//
//Isliye:

// item > 2
// aur
// item * 10

// dono filter me chal sakte hain, lekin pehle wale me condition clear hai aur doosre wale me truthy/falsy conversion ho raha hai. ✅




//map SAME HAI... BUT USKA KAAM ULTA HAI... 