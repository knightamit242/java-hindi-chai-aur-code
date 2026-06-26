//WHILE LOOP


//1//
// JAB TAK CONDITION TRUE HAI,
// TAB TAK LOOP CHALEGA.

//Syntax

// while(condition){
//     // code
// }


//EXAMPLE=>

// let i=1          // INITIALISATION BAHAR DETE HAI

// while(i<=5){                   // CONDITION
//     console.log(i)   
//     i++                          //iterate YAHA KR DIYA
// } 

//FOR LOOP JAISA HE HAI

//CONCEPT=>
// ROUND 1: i = 1   → 1 <= 3 TRUE,   PRINT 1,   i++ → 2;
// ROUND 2: i = 2   → 2 <= 3 TRUE,   PRINT 2,   i++ → 3;
// ROUND 3: i = 3   → 3 <= 3 TRUE,   PRINT 3,   i++ → 4;
// ROUND 4: i = 4   → 4 <= 3 FALSE,  LOOP STOP


//1.1//
//IMPORTANT
// let i = 1

// while(i <= 5){
//     console.log(i)
// }

//❌ Galat Kyon?
//i++ NAHI LIKHA

// i HAMESHA 1 RAHEGA
// 1 <= 5 HAMESHA TRUE RAHEGA
// INFINITE LOOP BAN JAYEGA

//i++ BHOOL GAYE, TO i KI VALUE CHANGE NAHI HOGI, CONDITION HAMESHA TRUE RAHEGI AUR LOOP KABHI KHATAM NAHI HOGA (INFINITE LOOP).


//1.2//
//REVERSE COUNTING

// let i=5

// while(i>=1)
//     {
//     console.log(i)
//     i--
// }

// question // 2,4,6,8,10

// let i=2
//  while(i<=10){
//     console.log(i)
//     i=i+2
//  }          


//1.3//
//while AND Array

// let myArray=["hulk","batman","flash"]
// console.log(myArray.length)

// let index=0

// while(index<myArray.length){
//     console.log(myArray[index])
//     index++
// }




//2//
//DO-WHILE LOOP

// DO-WHILE KYA HAI?
//PEHLE CODE CHALEGA
// PHIR CONDITION CHECK HOGI


//2.1//
//SYNTAX

// do{
//     // code
// }
// while(condition)


//2.2//EXAMPLE

// let i=1

// do{
//     console.log(i)       // YE EK LINE HAMESHA CHALEGA... CONDITION SHI HO YA GALAT
//     i++
// }

// while(i<=5)

//2.3//DIFFERENCE
//WHILE: PEHLE CONDITION CHECK HOTI HAI

// DO-WHILE:
// PEHLE EK BAAR CODE CHALTA HAI
// PHIR CONDITION CHECK HOTI HAI

// ISLIYE DO-WHILE ME CODE
// KAM SE KAM EK BAAR ZAROOR CHALEGA.


//2.4//EXAMPLE BASED ON THIS

let i=555
do{
    console.log(i)  // OUTPUT:555 // KAM SE KAM EK BAAR ZAROOR CHALEGA.
    i++
}
while(i<=5)         // AB CONDITION CHECK HOGA...// FALSE... THEN LOOP SE BAHAR AA JAYEGA


