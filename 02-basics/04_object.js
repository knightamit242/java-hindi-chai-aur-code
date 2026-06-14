//1//SINGELTON OBJECT AND NON-SINGELTON OBJECT DIFFERENCE

// const tinderUser= new Object()
// console.log(tinderUser)  //SINGELTON OBJECT

//OUTPUT WILL BE SAME IN BOTH THE CASES

// const instaUser= {}
// console.log(instaUser)  //NON-SINGELTON OBJECT




//2//

// const instaUser= {}

// instaUser.id="knight123"
// instaUser.name= "Amit Singh"
// instaUser.isLoggedIn= false

// console.log(instaUser)



//3// OBJECT NESTING
      //OBJECT KE ANDAR OBJECT AUR US OBJECT KE ANDAR EK AUR OBJECT

// const instaUser= {

// email: "amit@google.com",
// fullname:{
//     userFullName:{
//         firstName:"Amit",
//         lastName: "Singh"
//     }
// }
// }

// console.log(instaUser.fullname)  //OUTPUT:{ userFullName: { firstName: 'Amit', lastName: 'Singh' } }

// console.log(instaUser.fullname.userFullName.firstName) //ACCESS KARNE KA TARIKA
// console.log(instaUser.fullname.userFullName.lastName) 




//4// OBJECT MERGING

//4.1//
// const obj1= {1:"a", 2:"b"}
// const obj2= {3:"c", 4:"d"}

// obj3= {obj1,obj2} // LEKIN AISE OUTPUT STRUCTURED NHI DEGA
// console.log(obj3)

//4.2// USING ASSIGN PROPERTY
// const obj1= {1:"a", 2:"b"}
// const obj2= {3:"c", 4:"d"}

// obj3= Object.assign({},obj1,obj2) // {} USE KARNE SE ORIGINAL OBJECTS MODIFY NAHI HOTE.
// console.log(obj3)

// OBJECT.ASSIGN() OBJECTS KO MERGE KARNE KE LIYE USE HOTA HAI.

// SYNTAX: Object.assign(target, source1, source2)
// {} EK NAYA EMPTY OBJECT HAI JISME DATA COPY HOGA.

// Object.assign({}, obj1, obj2)
// STEP 1: {} ME obj1 COPY HOGA
// STEP 2: USI OBJECT ME obj2 COPY HOGA
// OUTPUT:
// {1:"a", 2:"b", 3:"c", 4:"d"}


//4.2.1// AGAR HUM {} NHI DE// 

// const obj1= {1:"a", 2:"b"}
// const obj2= {3:"c", 4:"d"}

// obj3= Object.assign(obj1,obj2) 

// console.log(obj3) // IN DONO CASE MEIN OUTPUT SAME DEGA... BCOZ AB obj1=obj3...
// console.log(obj1)  // YAHA HUMNE {} NHI USE KIYA ISLIYE... TARGET obj1 BAN GYA AUR BAAKI SOURCE BAN GYE
//                   // obj1 MODIFY HO GYA AUR SAARI VALUES USME STORE HO GYI
    

//4.3// MERGING OBJECT WITH MOST COMMONLY USED METHOD

// const obj1= {1:"a", 2:"b"}
// const obj2= {3:"c", 4:"d"}

// const obj3= {...obj1,...obj2} // EASIEST and MOST USED

// console.log(obj3)




//5// ARRAY OF OBJECTS

//YAHA users EK ARRAY OF OBJECTS HAI
// const users= [
// {
//     id:1,
//     email: "amit@google.com"
// },

// {
//     id:3,
//     email:"satyam@google.com"
// },

// {
//     id:2,
//     email:"harsh@google.com"
// }
// ]

// console.log(users[1].email) //ACCESS AISE HOGA
// console.log(users[2].id)


// users[0] → FIRST OBJECT
// users[1] → SECOND OBJECT
// users[2] → THIRD OBJECT

// users[1].email

// STEP 1:                           
// users[1]                           //PEHLE ARRAY INDEX TAK JAO: users[1]  
// → SECOND OBJECT                   //ARRAY KE ANDAR OBJECT HAI 
// STEP 2:
// .email                            //PHIR OBJECT PROPERTY TAK JAO: .email
// → EMAIL PROPERTY KI VALUE NIKALO

// OUTPUT:
// "h@gmail.com"

// FORMULA:
// arrayName[index].property




//6// ACCESSING ALL VALUES OR ALL KEYS OF OBJECT

const user= {

    "full name":"Amit Singh",
    name: "Amit",
    "age": 22,   
    highSchoolPassAge: 15,
    "location": "Deoria",
    email: "singhamit79449@gmail.com",
    isLoggedIn: false

}

console.log(Object.keys(user))   // SAARE KEY DE DEGA 
console.log(Object.values(user))  // SAARE VALUES DE DEGA

console.log(Object.entries(user)) //OBJECT KI SAARI ENTRIES DE DEGA...

//AGAR HAME DEKHNA HAI KOI KEY HAI YA NHI OBJECT MEIN
console.log(user.hasOwnProperty("isLoggedIn")); //true dega

