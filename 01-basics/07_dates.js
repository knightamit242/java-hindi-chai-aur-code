//1//Date() and new Date() DIFFERENCE

//let date= Date() // yaha par Date() use hua hai to ye string return krta hai
//console.log(date)// Wed Jun 10 2026 21:58:55 GMT+0530 (India Standard Time) //ye output dega jo string hai
                
// BUT hame Date() ke method padhne hai so 

//let date1= Date()
//console.log(date1.getFullYear) //yaha pe ERROR dega. get ke method use nhi ho payenge

//so to remove this error we use new.new will convert date into object

//let date2=new Date() // Date object banata hai //type:object
//console.log(date2.getFullYear()) //current year output dega

//CONCEPT=> date object mein bohot saare method store hote hai... to 
//date2.getFullYear()=> new Date() ne jo Date object banaya hai usme .getFullYear() method ko dhhodega aur phir milne ke baad usko execute kr dega

//Date() object nhi banata... current date and time return krta hai only... jiska type string hota hai



//2//
// let date= new Date()  //CURRENT DATE AND TIME DEGA
// console.log(date)
// console.log(date.toString()) 
// console.log(date.toDateString()) 
// console.log(date.toISOString()) 
// console.log(date.toJSON()) 
// console.log(date.toLocaleString()) 
// console.log(date.toLocaleDateString()) 
// console.log(date.toLocaleTimeString()) 
// console.log(date.toTimeString()) 
// console.log(typeof date)




//3//Passing value in Date()

//3.1//
// let myGivenDate= new Date(2023,0,23)
// console.log(myGivenDate)
//3.2//
// let myGivenDate= new Date(2026,0,26) //month 0 se start hota hai javascript mein //MONTH dega ye
// console.log(myGivenDate.toString())

// let myGivenDate= new Date(2026,0,26,5,3) // ye TIME bhi de dega
// console.log(myGivenDate.toString())       

//3.3//another format to pass date
// let myGivenDate= new Date("2026-01-24") // pehla Date format yyyy-mm-dd //IS FORMAT MEIN MONTH 1 SE 
// console.log(myGivenDate.toDateString());                             //START HO RHA HAI

// let myGivenDate= new Date("01-24-2026")    // Doosra Date format mm-dd-yyyy
// console.log(myGivenDate.toString());

//3.4//Timestamps
//let myTimeStamp =Date.now() //ye Current time को milliseconds में return करता है।// LEKIN KABSE//
//1 January 1970, 00:00:00 UTC से अब तक जितने milliseconds बीत चुके हैं। Usko Ye TimeStamp Mein Deta Hai
//console.log(myTimeStamp) 

//Visualize
// 1 Jan 1970
//       |
//       |
//       |----> 56 साल
//       |                                      1 SECOND=1000 millisecond(ms)
//       ↓
// आज (2026)
// इन 56 सालों के सारे milliseconds जोड़कर:
// 1759987654321
// जैसा number मिलता है।

//3.4.1// TIMESTAMP KA TYPE
// let myTimeStamp =Date.now()
// console.log(myTimeStamp)
// console.log(typeof myTimeStamp)


//3.4.2// new Date() KA TYPE
// let myTimeStamp = new Date()
// console.log(myTimeStamp)
// console.log(typeof myTimeStamp)


//3.4.3//
// let myTimeStamp =new Date()        //YAHA DATE OBJECT BAN GAYA
// // console.log(myTimeStamp.getTime()) //YE BHI TIMESTAMP DEGA // DATE OBJECT MEIN JAYEEGA AUR getTime() METHOD MILNE KE BAAD EXECUTE KR DEGA
// console.log(typeof myTimeStamp)


//3.4.4//                 // Date.now() AUR new Date().getTime() LAGBHAG SAME TIMESTAMP DETE HAIN
                          // EXECUTION TIME KI WAJAH SE THODA DIFFERENCE AA SAKTA HAI
console.log(Date.now())
let myTimeStamp= new Date()
console.log(myTimeStamp.getTime());

//3.4.4//TIMESTAMP KO DATE MEIN COVERT KARNA
// let myTimeStamp =Date.now()
// let newDate= new Date(myTimeStamp)
// console.log(newDate)


//3.4.4//ms KO SECOND MEIN CONVERT KRNA
// let myTimeStamp =Date.now()
// console.log(Math.floor(myTimeStamp/1000))
// console.log(Math.round(myTimeStamp/1000))




//4// new Date() METHODS=>
// let newDate= new Date()

// console.log(newDate.getDate()) //11<= output:aaj ka date

//console.log(newDate.getDay())  // 4<=output 
// getDay() WEEKDAY KA INDEX DETA HAI// 0=Sunday,1=Monday... 4=Thursday

// console.log(newDate.getFullYear()) //2026<= output

// console.log(newDate.getMonth()+1)  //6<= output: June hai... 0 se month start hota hai isliye +1







