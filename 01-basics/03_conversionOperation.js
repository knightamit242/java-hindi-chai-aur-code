
//1//conversion operation
// let marks="33abc" //string
// console.log(marks)
// console.log(typeof marks)

// let marks="33abc"
// let valueInNumber=Number(marks)  //conversion of string to number
// console.log(typeof(valueInNumber))  //number print hoga
// console.log(valueInNumber) //       NaN => Not a Number print hoga kykoki value 33abc ko number me convert nhi kr skta isliye NaN print hoga

//BUT REVERSE IS POSSIBLE THAT IS... NUMBER TYPE  CAN BE CONVERTED INTO STRING TYPE

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// yaha hum type check  kr rehe hai aur uske baad conversion kr rhe hai aur dekh rhe hai ki hota hai ya nhi


//2//conversion
//kuch aur bhi check krte hai aur dekhte hai ki hota hai ya nhi

// let marks2=null
// console.log(marks2)
// console.log(typeof(marks2))//null ka type object hota hai jo ki ek bug hai js me but wo aise hi chalta rahega

// let marks3=undefined
// console.log(marks3)
// console.log(typeof(marks3))//undefined ka type undefined hota hai


//3//boolean conversion
// let isLoggedIn=""
// let booleanIsLoggedIn=Boolean(isLoggedIn) //conversion of string to boolean
// console.log(booleanIsLoggedIn)
// console.log(typeof(booleanIsLoggedIn))

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


//4//number to string conversion
//let somenumber=33
//console.log(somenumber)
//console.log(typeof(somenumber))

// let anynumber=33
// let stringNumber=String(anynumber)
// console.log(stringNumber)
// console.log(typeof(stringNumber))

//************************************Operations ****************************************//

// let value=3
// let negValue=-value
//console.log(negValue) //-3 print hoga

//5//string concatenation
let str1="hello"
let str2="     world" //jitna space hoga utna space print hoga
let str3=str1+str2
//console.log(str3)

//string and number
//console.log("1"+2)
//console.log(1+"2")
//console.log("1"+2+3) //123 print hoga
//console.log(1+"2"+3) //123 print hoga
//console.log(1+2+"3") //33 print hoga
// console.log(1+2+"3"+7+8+6+7+4+0+1) //337867401 print hoga
//ye utna important nhi hai but phir bhi 
// kyoki js left to right read krta hai isliye pehle 1+2 hoga uske baad uska result 3 hoga uske baad 3+"3" hoga uska result 33 hoga

//6//prefix and postfix


//6.1//postfix
//let x = 3;
//const y = x++;
//console.log(x,y) // postfix mein pehle y ko x ki value assign kr di jati hai uske baad x ki value 1 se increment kr di jati hai isliye x is 4; y is 3 print hoga
// x is 4; y is 3

//let x2 = 3n;
//const y2 = x2++;
//console.log(x2,y2)
// x2 is 4n; y2 is 3n

//6.2//prefix
// let x = 3;
// const y = ++x;
// console.log(x,y) //prefix mein pehle x ki value 1 se increment kr di jati hai uske baad y ko x ki value assign kr di jati hai isliye x is 4; y is 4 print hoga
// // x is 4; y is 4

// let x2 = 3n;
// const y2 = ++x2;
// console.log(x2,y2)
// x2 is 4n; y2 is 4n






