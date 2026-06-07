//1//
// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)

// console.log(2=1)
// ye error dega kyoki 2 ko 1 ke barabar assign krne ki koshish kr rahe hai jo ki possible 
//nhi hai... ye comparison operator nhi hai assignment operator hai

// console.log(2==1)
// console.log(2!=1)
// console.log(2%1)


//2//
//console.log("2">1)
//console.log("02">1)


//3//
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

//***************************IMPORTANT***************************************//
//The reason is that an equality check == and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false.


//4//
// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined<0)

console.log("2"==2)// ye true dega kyoki double equal operator type conversion kr deta hai aur dono ko number me convert kr deta hai isliye ye true dega

console.log("2"===2)// ye false dega kyoki triple equal operator type conversion nhi krta hai aur dono ka type alag hai isliye ye false dega




