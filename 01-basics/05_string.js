const name="Amit"
const repoCount=6

//console.log(name+ repoCount +"   value")//old approach

//console.log(`my name is ${name} and I have total ${repoCount} repo on github`);
//' ' → Single Quotes
//" " → Double Quotes
//` ` → Backticks (Template Literals)
//${variable} सिर्फ backticks के अंदर ही काम करता है।


//**********************************String Method**************Imp************************//
const gameName= "amitjigreat"

//console.log(gameName)
//console.log(gameName[0]) //Accessing the value at key 0
//console.log(gameName.__proto__)

//console.log(gameName.length)//lenght of gameName
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt('2'));
//console.log(gameName.indexOf('i'))


//console.log(gameName.substring(0,3))
          //These both are Same//
// const newString= gameName.substring(0,3)
// console.log(newString)

// const anotherString=gameName.slice(-8,7)
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


const stringNewOne="      amit"

//console.log(stringNewOne)
//console.log(stringNewOne.trim())//Trim will cut the spaces

const url="htttps://Amit.com/Amit%20singh"

console.log(url.replace('%','-'))
console.log(url.includes('Amit'))
console.log(url.includes('Satyam'))

//split//

