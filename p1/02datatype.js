// #Conversion

// let d = "5e"
// bool = true
// st = String(d)
// nm = Number(d)

// b = Number(bool)
// n = 0
// bol = Boolean(n)

// console.log(st)
// console.log(nm)
// console.log(b)
// console.log(bol)


// console.log(typeof st)
// console.log(typeof nm)    // NaN => number

// 5 => 5
// 5e => NaN 
// true =>  1    false => 0

// console.log(1 + 2 + 3)
// console.log("1" + 2 + 3)
// console.log(1 + '2' + 3)
// console.log(1 + 2 + '3')


// #comparison 

// console.log(2 == 2)
// console.log("2" == 2)

// console.log("2" === 2) 
// console.log("2" !== 2) 

// console.log(null > 0)    // false
// console.log(null == 0)   // false
// console.log(null < 0)   // false

// console.log(null >= 0)   // true

// und = Number(undefined)     // NaN
// big  = 322222222222222222222228932n

// console.log(big)

// console.log(und)
// console.log(undefined == 0)   // false
// console.log(undefined <= 0)   // false
// console.log(undefined !== 0)   // true

// let nulval = null

// arr = ["h",4,"fd"]
// // console.log(arr)

// obj = {
//   1:"a",
//   2:"c",
//   "a":23
// }
// // console.log(obj.1,obj.2,obj.a)

// let fn = function(){
//   console.log("function declared")
// }
// let str = "ch"
// let und = undefined
// let und;

// console.log(typeof arr)     // Object
// console.log(typeof obj)     // Object
// console.log(typeof fn)      // function
// console.log(typeof nulval)   // Object

// console.log(typeof str)   // Object

// console.log(typeof und)   // Object

const name = " ch ";
const lastname = "korado";
const newName = new String("BC") 
const dash = "Chandan-Korado"

// console.log(lastname)
// console.log(name.at(0))
// console.log(name.charAt(0))
// console.log(lastname.substring(0,4))
// console.log(lastname.slice(0,4))
// console.log(lastname.slice(-4,-1))
// console.log(name)
// console.log(name.trim())
// console.log(name.replace("ch ","Chandan"))
// console.log(name.includes('c'))   // true
// console.log(dash.split('-')) // (2) ['Chandan', 'Korado']

// console.log(name.length)
// console.log(lastname.toUpperCase())

// console.log(name + lastname +" bc hai")
// console.log("my name is ${name}")    // wrong o/p

// console.log("my name is "${name})    // error

// console.log('my name is ${name}')  // no single quote 

// console.log(`my name is ${name} and ${lastname}`)

// const balance = new Number(200000000000)

// console.log(balance.toString().length)
// console.log(balance.toFixed(5))

// const another = 23.8966
// console.log(another.toPrecision(4))

// console.log(balance.toLocaleString())

// console.log(balance.toLocaleString('en-IN'))


// Math ??

// console.log(Math)
// console.log(Math.abs(-4))       // 4
// console.log(Math.round(4.4))    // 5
// console.log(Math.ceil(5.1))     // 6
// console.log(Math.floor(7.6))    // 7

// console.log(Math.min(6,5,3,8.4))

// console.log(Math.max(6,5,3,8.4))

// console.log(Math.random())

// console.log((Math.random()*10)+1)

// console.log(Math.floor((Math.random()*10)+1))

// const min = 10
// const max = 20

// console.log((Math.random() * (max - min + 1)) + min)



// Date ??

let myDate = new Date()

// console.log(typeof myDate)


// console.log(myDate)

// console.log(myDate.toString())

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleString())

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleTimeString())

// console.log(myDate.getDay())

// console.log(myDate.getMilliseconds())

let myDated  = new Date(271001, 100, 367)

let myDated1  = new Date(271001, 100, 367, 25, 70)

// console.log(myDated1)

// console.log(myDated.toLocaleString())

// console.log(myDated.getTime())
// console.log(Math.floor(Date.now()/1000))
// 
// console.log(myDated1.getMinutes())

// console.log(`Today Date is ${Date.now()}`)

myDate.toLocaleString('default',{
  weekday:"long"
})