//0.1// NORMAL SA EK EXAMPLE

// function add(num1,num2)
// {
//     return(num1+num2)
// }

// console.log(add(10,"20")) //OUTPUT: 1020



//1//

//1.1//
// function userLoggedIn(name){

//         return`${name} just logged in`
// }

//     console.log(userLoggedIn("Amit")) //first case

    // console.log(userLoggedIn())  // AGAR HUM KOI ARGUMENT PASS HE NA KARE TO 
//                                  //THEN OUTPUT=> undefined just logged in




//1.2//
// function userLoggedIn(name="Amit"){

//         return name                  // YAHA Amit PRINT HOGA KYOKI ARGUMENT MEIN KOI VALUE PASS NHI KI 
// }                                    //GYI HAI    
//AND...DEFAULT VALUE TABHI USE HOGI JAB ARGUMENT undefined HO YA PASS HI NA KIYA GAYA HO
// console.log(userLoggedIn())



                                 
//1.3//
// function userLoggedIn(name="Amit"){   
       
//     return `${name} just logged in`
// }
// console.log(userLoggedIn(""))   // PARAMETER MEIN KUCH VALUE DIYE HO LEKIN... AGAR ARGUMENT MEIN 
//                                 // KUCH VALUE PASS KR RHE HO... TO WO PARAMETER WALI VALUE KO HATAKAR
//                                 // KHUD AA JAYEGA... YAHA PAR name="Amit" NHI HOGA
//                                 // name="" EMPTY STRING AA JAYEGA



//2// USING IF-ELSE
// function userLoggedIn(name){
//         if(name==undefined){
//             console.log("please give name")
//         }
//         else{
//         return`${name} just logged in`
// }
// }

//     console.log(userLoggedIn()) //OUTPUT: please give name
//                                              // undefined
//UNDEFINED ISLIYE DE RHA KYOKI TUMNE console.log KIYA HAI
// CONSOLE.LOG HATA DOGE TO UNDEFINED KO PRINT KARANE WALA KOI NHI HOGA... PHIR undefined PRINT BHI NHI HOGA


// UNDEFINED, NULL, "",O ALL THESE= false
//"ANYTHING INSIDE THIS QUOTE"= true


//2.1// UNDEFINED= false IMP***
// PROFESSIONAL WAY// USED IN REACT
// if(NAME === UNDEFINED) YA if(!NAME) PREFER KIYA JATA HAI.

// function userLoggedIn(name){
//     if(!name){
//         console.log("please give name")
//     }
//     else{
//     return `${name} just logged in`
// }
// }
//     userLoggedIn()


//2.2//
// function userLoggedIn(name){
//     if(!name){
//         console.log("please give name")
//     }
//     else{
//     return `${name} just logged in`
// }
// }
//     console.log(userLoggedIn("Amit"))




 
//3// PASSING MORE THAN ONE ARGUMENT TO A SINGLE PARAMETER USING REST OPERATOR


// function cartPriceCalculator(...num){   // ...num=> REST OPERATOR HAI
//         return num
// }
// console.log(cartPriceCalculator(100,200,300))


//3.1//

// function cartPriceCalculator(num1,num2, ...num){
//         return num
// }     
// console.log(cartPriceCalculator(100,200,300,400,500,)) //OUTPUT:[ 300, 400, 500 ]
// // YAHA PE 100 num1 me chala jaayega... and same 200 num2 mein... num1=100,num2=200
// // AND BAKI JO BACHE WO num MEIN    




//4// OBJECT VALUES PRINT KARANA USING FUNCTION

//4.1// 1ST METHOD// OBJECT PEHLE HE BANA LO
//  const user={
//     userName:"Amit",
//     age: 18
//  }

//  function handleObject(anyobject){
//         console.log(`username is ${anyobject.userName} and user age is ${anyobject.age}`)
//  }

//  handleObject(user)

//YAHA SABSE PEHLE OBJECT BANAYA user NAAM KA... PHIR FUNCTION BANAYA JAHA anyobject EK PARAMETER HAI
//SO SABSE PEHLE YAHA AB FUNCTION CALL HOGA... user... JAVASCRIPT user KI VALUE KO DEKHEGA AUR
// PHIR PAAS KR DEGA... USKE BAAD anyobject=user ... MTLAB anyobject BHI USI OBJECT KO POINT KREGA
// JISKO user KR RHA THA... HENCE anyobject.username= "Amit" AND anyobject.age=18



//4.2//
// function handleObject(anyobject){
//         console.log(`username is ${anyobject.userName} and his age is ${anyobject.age}`)
// }

// handleObject(user={       //4.2.1  //YE BHI CHALEGA... ASSIGN KR DO POORE KO user(KISI VARIABLE) MEIN
//     userName: "Amit",     // LESS COMMONLY USED   //2ND METHOD
//     age:22                   // FUNCTION CALL KE DAURAN user VARIABLE BHI CREATE HO JAYEGA
// })
                   //OR//
// handleObject({             //4.2.2    //YE BHI CHALEGA... BINA ASSIGN KIYE KISI VARIABLE MEIN
//     userName: "Amit",                 // MORE USED // 3RD METHOD
//     age:22
// })





//5// ARRAY VALUES PRINT KARANA USING FUNCTION

// const myArray=[1,2,"Amit",3]  

// function arrayValues(getValue){
//     return getValue[2]
// }

// console.log(arrayValues(myArray))   //METHOD .1
            //OR//
// console.log(arrayValues([1,2,"Amit",3]));      //METHOD .2// ARRAY YHI BANAKE PASS KR DO






