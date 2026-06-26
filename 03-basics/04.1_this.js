// Chalo ek single code se Memory Creation Phase aur Execution Phase dono ko visualize karte hain.

// console.log(a)
// console.log(b)
// console.log(c)

// sayHello()

// var a = 10
// let b = 20
// const c = 30

// function sayHello() {
//     console.log("Hello")
// }

// const greet = function() {
//     console.log("Hi")
// }

// const arrow = () => {
//     console.log("Arrow")
// }

// Golden Rule


// MEMORY CREATION PHASE MEIN SIRF:

// 1. var -> undefined
// 2. let -> <uninitialized>
// 3. const -> <uninitialized>
// 4. Function Declaration -> poora function

// STORE HOTA HAI.

// OBJECTS, ARRAYS, FUNCTION EXPRESSIONS,
// ARROW FUNCTIONS KI ACTUAL VALUES
// EXECUTION PHASE MEIN BANTI HAIN.



//Thoda precise:
// Function Expression aur Arrow Function ki function value
// execution phase me variable ko assign hoti hai.



// //**************************************CONCEPT***************************************************//

// STEP 1: Global Execution Context Banta Hai

// JavaScript sabse pehle Memory Creation Phase mein jaati hai.

// Memory Creation Phase

// 1. var
// var a = 10
// Memory:
// a -> undefined


// 2. let
// let b = 20
// Memory:
// b -> <uninitialized>


// 3. const
// const c = 30

// Memory:
// c -> <uninitialized>


// 4. Function Declaration
// function sayHello() {
//     console.log("Hello")
// }

// Memory:
// sayHello -> complete function
// Poora function memory mein aa gaya.

// 5. Function Expression
// const greet = function() {}

// Memory:
// greet -> <uninitialized>
// Function abhi memory mein assign nahi hua.

// 6. Arrow Function
// const arrow = () => {}

// Memory:
// arrow -> <uninitialized>


// Memory Snapshot

// Memory Creation Phase ke end par:

// GLOBAL MEMORY

// a         -> undefined

// b         -> <uninitialized>

// c         -> <uninitialized>

// sayHello  -> function sayHello(){...}

// greet     -> <uninitialized>

// arrow     -> <uninitialized>

// Ye exact picture yaad rakho.



// STEP 2: Execution Phase

// Ab code line by line chalega.

// Line 1
// console.log(a)

// Output:
// undefined
// Kyuki:
// a -> undefined


// Line 2
// console.log(b)

// Output:
// ReferenceError
// Kyuki:
// b -> <uninitialized>

// TDZ mein hai.

// ⚠️ Yahin code ruk jaayega.

// Baaki lines execute hi nahi hongi.

// Agar Ye 3 console hata dein
// sayHello()

// var a = 10
// let b = 20
// const c = 30

// To:

// sayHello()

// Memory mein function already hai.

// Output:
// Hello

//AB VALUE AAYENGI VARIABLES MEIN
// var a = 10
// a: undefined -> 10

// let b = 20
// b: <uninitialized> -> 20

// const c = 30
// c: <uninitialized> -> 30

// greet

// const greet = function() {}
// Ab:
// greet -> function(){...}

// arrow

// const arrow = () => {}
// Ab:
// arrow -> arrow function




// Ab Object Waala Example

// const user = {
//    name: "Amit",
//    age: 22
// }

// Memory Phase:

// user -> <uninitialized>

// ❌ Ye nahi hoga:

// name -> Amit
// age -> 22

// Object Execution Phase mein create hota hai.

