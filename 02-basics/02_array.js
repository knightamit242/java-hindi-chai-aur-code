//ARRAY//

//1//
// const marvelHeros= ["IRONMAN","SPIDERMAN","THOR"]
// const dcHeros= ["BATMAN","SUPERMAN","FLASH"]

// console.log(marvelHeros);
// console.log(dcHeros);

//1.1//
// const marvelHeros= ["IRONMAN","SPIDERMAN","THOR"]
// const dcHeros= ["BATMAN","SUPERMAN","FLASH"]
// marvelHeros.push(dcHeros) //MARVEL WAALE ARRAY MEIN DC WAALA ARRAY(POORA ARRAY HE) ADD HO JAYENG
// console.log(marvelHeros)  

//1.2//
// const marvelHeros= ["IRONMAN","SPIDERMAN","THOR"]
// const dcHeros= ["BATMAN","SUPERMAN","FLASH"]
// marvelHeros.push(dcHeros) 
// console.log(marvelHeros)
// console.log(marvelHeros[3])
// console.log(marvelHeros[3][2]) //VALUE AISE ACCESS KRNA PADEGA... YAHA HAMNE FLASH KO ACESS KIYA HAI
// console.log(marvelHeros[5]) //ye undefined dega kyoki FLASH KO ACCESS KRNA HAI TO UPAR WALA METHOD APPLY KR

// AISE VALUE ACCESS KRNE PE PROBLEM AATI HAI ISLIYE WE USE CONCATENATE

//1.3//

//CONCATENATE(concat)
// const marvelHeros= ["IRONMAN","SPIDERMAN","THOR"]
// const dcHeros= ["BATMAN","SUPERMAN","FLASH"]

// const allHeros= marvelHeros.concat(dcHeros) //concat WILL MERGE BOTH THE ARRAY INTO A SINGLE ARRAY
// marvelHeros.concat(dcHeros) // YE KAAM NHI KREGA JABTAK ISSE NAYE VARIABLE ME STORE NHI KROGE UNLIKE PUSH
// console.log(allHeros)


// CONCAT WILL MERGE TWO ARRAYS
// BUT THERE IS A METHOD TO MERGE MANY ARRAY... THIS ONE IS USED MOSTLY

//1.4// MOSTLY USED
//  const marvelHeros= ["IRONMAN","SPIDERMAN","THOR"]
//  const dcHeros= ["BATMAN","SUPERMAN","FLASH"]
//  const allNewHeros=[...marvelHeros, ...dcHeros] // CAN ADD MORE THAN 2 ARRAY IN A SINGLE TIME
//  console.log(allNewHeros); 



//2//
// const array=[1,2,3,4,[5,6],6,[7,6,[8,9],8]] // YAHA BOHOT SAARE ARRAY EK HE ARRAY MEIN HAI
// const newArray= array.flat(Infinity)   // SAARE ARRAY ELEMENTS KO EK HE ARRAY ME DE DEGA
// console.log(newArray)                 //  WHEN  DEPTH IS (Infinity)



//3//
console.log(Array.isArray("Amit")) 
// Array.isArray() CHECK KARTA HAI KI JO VALUE PASS KI GAYI HAI WO ARRAY HAI YA NAHI.
// YAHA "Amit" STRING HAI ISLIYE YE false RETURN KAREGA

console.log(Array.isArray([1,2,3])) // true RETURN KAREGA

//3.1//
// console.log(Array.isArray("Amit")) 
// WE CAN CHANGE THIS "Amit" STRING INTO ARRAY TO0

console.log(Array.from("Amit"));
//Array.from() kisi iterable (String, Set, Map, etc.) ya array-like object ko Array me convert karta hai.



//4// METHOD TO SCORE PARTICULAR ELEMENT INTO AN ARRAY

let score1= 33
let score2= 43
let score3= 50

// console.log(Array.of(score1,score2,score3)) // [33,43,50]
