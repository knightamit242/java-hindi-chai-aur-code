// const name="Amit"
// const repoCount=6

// console.log(name+ repoCount +"   value")//old approach

//console.log(`my name is ${name} and I have total ${repoCount} repo on github`);
//' ' → Single Quotes
//" " → Double Quotes
//` ` → Backticks (Template Literals)
//${variable} सिर्फ backticks के अंदर ही काम करता है।


//**********************************String Method**************Imp************************//
const gameName= "amitjigreat"

// console.log(gameName)
// console.log(gameName[0]) //Accessing the value at key 0
// console.log(gameName.__proto__)

// console.log(gameName.length)//lenght of gameName // LENGTH TOTAL CHARACTERS KI COUNT HOTI HAI*** 
// console.log(gameName.charAt('2'));
// console.log(gameName.indexOf('i'))

//1//
// console.log(gameName.substring(0,3))
//         //   These both are Same
// const newString= gameName.substring(0,3)
// console.log(newString)

//console.log(game.substring(9,5)) // isko (5,9) KR DEGA PHIR OUTPUT DEGA... MTLB SWAP


//| Feature        | slice()            | substring()      |
// | -------------- | ------------------ | ---------------- |
// | Negative Index | ✅ Yes              | ❌ No             |
// | Start > End    | ❌ Empty String     | ✅ Values Swap    |
// | Common Use     | Zyada use hota hai | Kam use hota hai 


//2//
//SLICE METHOD
// const anotherString=gameName.slice(7,7)
// console.log(anotherString)

//gameName की length = 11

// Character : a m i t j i g r e a t
// Index     : 0 1 2 3 4 5 6 7 8 9 10
// Neg Index :-11-10-9-8-7-6-5-4-3-2-1

// अब:(-11,7)=>

// gameName.slice(-11, 7)
// Step 1: Start Index
// -11 => 11 + (-11) = 0
// तो start = 0
// Step 2: End Index
// 7
// slice() में end index include नहीं होता।
// तो indices लिए जाएंगे:
// 0 1 2 3 4 5 6
// Characters:
// a m i t j i g
// Result:
// amitjig


                              //SLICE CONCEPT
// START INCLUDED
// END EXCLUDED

// NEGATIVE INDEX = LENGTH + NEGATIVE INDEX

// START == END
// OUTPUT = "" (EMPTY STRING)

// START > END
// OUTPUT = "" (EMPTY STRING)

// slice(n)
// INDEX n SE END TAK SAB MILEGA

// slice(-1)
// LAST CHARACTER

// slice(-2)
// LAST 2 CHARACTERS

// slice (length se bada koi negative number)
// OUTPUT: 0 se end tak

// slice (length se bada koi positive number)
// OUTPUT: "" (EMPTY STRING)

// BAHUT CHHOTA NEGATIVE INDEX
// JAVASCRIPT USE 0 MAAN LETA HAI

//3//

const stringNewOne="      amit"

//console.log(stringNewOne)
//console.log(stringNewOne.trim())//Trim will cut the spaces//START AUR END KE WHITESPACES REMOVE KARTA HAI

const url="htttps://Amit.com/Amit%20singh"

//console.log(url.replace('%','-'))   // SIRF PEHLA MATCH REPLACE KARTA HAI
//console.log(url.includes('Amit'))
//console.log(url.includes('Satyam'))



//split//

//1//
// const newStr= "Amit"
// console.log(newStr.split(" "))

// const newStr2= "Amit"
// console.log(newStr.split("")) 

//2//
// const newStr3="My name is Amit Singh"
// console.log(newStr3.split(""))

// const newStr4="My name is Amit Singh"
// console.log(newStr4.split(" "))

//3//
// const newStr5=newStr4.replaceAll(" ","")
// console.log(newStr5)
// console.log(newStr5.split(""))  //AGAR SPACE HATANA HO TO YE EK WAY HAI

//4//
//const ekStr="html,css,javascript"
//console.log(ekStr.split(","))

//5//
// const ekStr2="a-b-c-d-e"
// console.log(ekStr2.split('-',3))

//6//
// const ekStr3="a-b-c-d-e"
// console.log(ekStr3.split('-',-4)) //SPLIT KRKE POORI VALUE DE DEGA WAISE HE
//// NEGATIVE LIMIT KO 0 TREAT KARTA HAI
// OUTPUT: []