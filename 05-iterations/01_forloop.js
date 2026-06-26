// FOR LOOP
//AGAR EK HI KAAM KO BAAR-BAAR KARNA HO,
// TO FOR LOOP USE KARTE HAIN.
// REPETITION = LOOP

// SYNTAX

// for(initialization;condition;increment){
        //code
// }


//EXAMPLE=>
    // for (let i=1;i<=5;i++){
    //     console.log(i)
    // }

//CONCEPT=>

// 1. Initialization

// let i = 1
// LOOP KAHAN SE SHURU HOGA.

// 2. Condition

// i <= 5
// JAB TAK YE TRUE HAI,
// LOOP CHALEGA.

// 3. Increment

// i++
// HAR CHAKKAR KE BAAD
// i ME 1 ADD HOGA.


// STEP-BY-STEP EXECUTION
//Round 1
// i = 1 → 1 <= 3 TRUE HAI,
//  ISLIYE 1 PRINT HOGA,
//  PHIR i++ SE i KI VALUE 2 HO JAYEGI.


//Round 2   i = 2 → 2 <= 3 TRUE HAI, 
// ISLIYE 2 PRINT HOGA,
//  PHIR i++ SE i KI VALUE 3 HO JAYEGI.

//ROUND 3=> `i = 4` → `4 <= 3` FALSE HAI, 
// ISLIYE CONDITION FAIL HO GAYI AUR LOOP STOP HO GAYA.



//SOME QUESTION... PRINT TABLE OF 2

// for (i=1; i<=10; i++){
//     console.log(2*i)
// }

//REVERSE COUNTING 5.4.3.2.1

// for(i=5; i>=1; i--){
//     console.log(i)
// }

//EVEN NUMBERS

// for(i=1;i<=10;i++){
//     console.log(2*i)
// }
            //OR
// for(i=2; i<=10; i=i+2){
//     console.log(i)
// }


//ODD NUMBERS

// for(i=1;i<=10;i=i+2){
//     console.log(i)
// }



//for and if-else loop combination

// for(i=1;i<=5;i++){
//     if(i==3)
//     {
//         console.log("three")
//     }

//     else{
//         console.log(i)
//     }
// }


//LOOP KE ANDAR LOOP 

// for(i=1;i<=3;i++){
//     console.log(`outer loop value: ${i}`)
//     for(j=1;j<=3;j++){
//         console.log(`outer loop value: ${i} and inner loop value: ${j} `)
//     }
// }


// ONE MORE QUESTION

// for(i=1;i<=3;i++){
//     console.log(`outer loop value: ${i}`)
//     for(j=1;j<=3;j++){
//         // console.log(i+'*'+ j + '='+i*j)    // YE USE NHI KRTE... READABLE  NHI HAI
//         // OR
//         console.log(`${i}*${j}=${i*j}`)       //READABLE AND USED 
//     }
// }


// ARRAY AND LOOP
 
// let myArray = ["hulk","batman","flash"]

// console.log(myArray.length)

// for(index=0;index<myArray.length;index++){   //index++ KE JAGAH SIRF index DIYA TO MEMORY "hulk" PE HE
//     const element = myArray[index]            //  ATAK JAYEGI AUR BAAR BAAR "hulk" dega
//     console.log(element)                      // ctrl+c for exit
// }