//1//

// 1. JAVASCRIPT EXECUTION CONTEXT (IMPORTANT)

// // JavaScript code run karne ke liye Execution Context banata hai.
// Types
// 1. Global Execution Context (GEC)
// 2. Function Execution Context (FEC)
// 3. Eval Execution Context (Rare)



//2//

// 2. GLOBAL EXECUTION CONTEXT (GEC)

// Jab program start hota hai,
// sabse pehle Global Execution Context banta hai.

// Memory:Global Execution Context

// Browser:window{}                              Node.js:global{}



//3//

//EXECUTION CONTEXT KE 2 PHASES

// 1. Memory Creation Phase
// 2. Execution Phase

//1. Memory Creation Phase
// Variables => undefined// var only baaki let aur const <uninitialized> hote hai
// Functions => poora function memory me store/defined

//Example:

// var a = 10
// function one(){
// }

// Memory: a => undefined      one => function


// 2.Execution Phase
// Ab line by line code execute hota hai.
// a => 10
// assign ho jayega.



//4//

// HAR FUNCTION APNA EXECUTION CONTEXT BANATA HAI

// Example:

// function one(){
//     let username = "Amit"
// }
// one()


// Jab: one() call hoga:Function Execution Context banega.
// phir AGAIN username= uninitialized (memory creation phase mein)
// and THEN   username= "Amit" (execution phase mein)

//THEN:
//Function khatam:Execution Context destroy



//5//

// CALL STACK (VERY IMPORTANT)
// JavaScript ek Call Stack use karta hai.
// Rule:
// Last In First Out (LIFO)

// Example:

// function one(){
//     console.log("one")
// }

// function two(){
//     one()
//     console.log("two")
// }

// two()

// MEMORY CREATION PHASE

// JavaScript poora code scan karega:
// one -> function
// two -> function

// Memory:

// Global Memory
// one -> function(){...}
// two -> function(){...}

// EXECUTION PHASE

// Sabse pehle:
// two()
// execute hoga.

// Call Stack:

// Global()
// two()
// two() ke andar

// Pehli line:

// one()

// Call Stack:

// Global()
// two()
// one()
// one() execute
// console.log("one")

// Output:

// one

// one() ka kaam khatam.

// Stack:

// Global()
// two()
// Wapas two() me

// Ab next line chalegi:

// console.log("two")

// Output:

// two
// two() khatam

// Stack:

// Global()

// Program end.

// FINAL OUTPUT
// one
// two


// CALL STACK VISUALIZATION

// PUSH

// Global()
// Global() -> two()
// Global() -> two() -> one()

// OUTPUT:
// one

// POP one()

// Global() -> two()

// OUTPUT:
// two

// POP two()

// Global()

//6//
// Yaha ek important baat:

// function two(){
//     one()
//     console.log("two")
// }

// one() complete hone tak console.log("two") chalega hi nahi. JavaScript single-threaded hai, isliye pehle one() poora execute hoga, phir control wapas two() me aayega. 😄

//JAVASCRIPT SINGLE THREADED HAI

// JavaScript ek time par ek hi kaam karta hai.
// Single Threaded
// Synchronous

// Code line-by-line execute hota hai.



//7//

// CALL STACK OVERFLOW

// Example:

// function one(){
//     console.log("hello")
//     one()
// }

// one()

// Output:
// RangeError:
// Maximum call stack size exceeded

// Reason:
// Call Stack bhar gaya.



//8//EXECUTION CONTEXT FLOW

// Global Execution Context

// ↓

// Memory Creation Phase

// ↓

// Execution Phase

// ↓

// Function Call

// ↓

// New Function Execution Context

// ↓

// Call Stack

// ↓

// Function Complete

// ↓

// Context Remove





// SUMMING UP EVERY POINTS

// JavaScript Execution Flow

// 1. Global Execution Context banta hai
// 2. Memory Creation Phase chalti hai
// 3. Variables = undefined
// 4. Functions = memory me store
// 5. Execution Phase start
// 6. Function call hone par naya Function Execution Context banta hai
// 7. Sab Execution Context Call Stack me jate hain
// 8. Stack LIFO follow karta hai
// 9. Function complete hote hi Context remove ho jata hai
// 10. JavaScript Single Threaded hai...// JavaScript ek time par ek hi call stack use karta hai.
// Isliye ek hi kaam execute karta hai.