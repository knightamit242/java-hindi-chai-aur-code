//1//
const score= 400
//console.log(score)  //YAHA SCORE KE ANDAR KUCH BHI AA SKTA HAI
//console.log(typeof(score))

const anotherScore= new Number(100) //new se object ban gya
//console.log(anotherScore)   // YAHA HAMNE BOL DIYA KI ANOTHER SCORE MEIN "NUMBER"  HE AAYEGA
//console.log(typeof(anotherScore))

//2//
//console.log(score.toString()) //score se ek copy lega. original score mein koi changes nhi honge
//console.log(typeof(score)) // score ka type dekhega.. wo abhi bhi number hai

//console.log(typeof(score.toString())) 
//=>=>=>=>=>=> "score.toString" mein toString ne jo value return ki hai uska type batayega//<=<=<=<=<=<=<=


//=>=>=>=>=>=>=>=>=>=>=>=>=>IMP CONCEPT<=<=<=<=<=<=<=<=<=<=<=<=<=<=
//सबसे Important Difference

// Code 1
// typeof(score)

// JavaScript score variable को check कर रही है।
// score → 100
// Type:
// number

// Code 2
// typeof(score.toString())

// JavaScript score को नहीं देख रही।
// वह toString() के return value को देख रही है।
// score.toString()
// ↓
// "100" <= YE RHI RETURN VALUE
// Type:
// string


//method of storing in another variable
// newScore=score.toString() // kisi variable mein store kr diya.. phir type change ho jayegi
// console.log(newScore)
// console.log(typeof newScore)


//3//
const balance = new Number(100)
//console.log(balance)


//4//
const someNumber=133
// console.log(someNumber.toString().length)

//lenght property hoti hai ... method nhi. lenght property string , function aur array etc ki bhi hoti hai
//"()"method ke aage ye hota hai. //difference
//length=> give info only     //method=>Do action

//5//
const ekNumber1=133
// console.log(someNumber.toFixed(3))


//6//
// const someNumber1=22.889
// console.log(someNumber1.toPrecision(2))
// console.log(someNumber1.toPrecision(3))
// console.log(someNumber1.toPrecision(4))
// console.log(someNumber1.toPrecision(5))

// // Precise value dega calculate krke    //isme limit hota hai ki kitne tak round off krna hai

// const someNumber2=22.233
// console.log(someNumber2.toPrecision(2))
// console.log(someNumber2.toPrecision(3))
// console.log(someNumber2.toPrecision(4)) 


//7// 
const hundreds=1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))











//=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>MATHS CONCEPT NOW <=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=
//1//

// console.log(Math)

// console.log(Math.PI)

// console.log(Math.abs(-465))

//console.log(Math.round(23.33)) // =>round aur precise dono alag hai<=
//console.log(Math.round(23.83)) //   ye bas integer value dega... decimal nhi
// console.log(Math.round(23.6))
// console.log(Math.round(-23.6))

// console.log(Math.ceil(4.1)) //ek upar ki integer value dega
// console.log(Math.floor(4.1)) //ek niche ki integer value dega

// console.log(Math.max(232,4,1,7,9))
// console.log(Math.min(232,4,1,7,9))


//2//
//console.log(Math.random())// 0 de dega lekin 1 nhi... 0 aur 1 ke beech koi bhi random value dega... 
//console.log(Math.random()*10) // har random value ko 10 se multiply kr dega...
                              // value 0(included) se lekar 9.99... tak dega... Including Decimal
 
//3//
//console.log(Math.random())
//console.log(Math.random()*10)
//console.log(Math.floor(Math.random()*10))//ye 0 se 9 tak value dega...Only Integer... 
                                        // floor ek niche waali value dega


//4//
// console.log(Math.random())
// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10)+1)// ye 1 se 10 tak value dega... integer only

//5//
// console.log(Math.random())
// console.log(Math.random()*11) //Output range: 0.0 se 10.999...


// console.log(Math.random())
// console.log(Math.floor(Math.random()*11)) //Output range: 0 se 10... integer value only

//6// Formula 

const min=10
const max=20

console.log(Math.floor(Math.random()* (max-min)+min))// Output range: 10 se 19 integer value only








