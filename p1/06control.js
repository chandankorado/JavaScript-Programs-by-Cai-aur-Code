// if(false) console.log("Hello")
// wont execute , only when true

// let bool = ""
// bool = undefined
// bool = 0
// bool = -0
// bool = null
// bool = NaN
bool = -0n

// bool = {}
// bool = []
// bool = "0"
// bool = `false`
// bool = function(){}

// console.log(bool)

// if(bool) {
//   console.log("Truthy")
// }
// else {
//   console.log("Falsy")
// }
// if(false) console.log("k"),console.log("l");
// else console.log("m"),console.log("n")

let mail = []
// if(mail) console.log("Mail is")
// else console.log("no mail")

// if(mail.length === 0) console.log("no mail");

// let obj = {}

// if(Object.keys(obj).length === 0) console.log("empty ");


// Nullish Coalescing Operator (??): null undefined

// let ver
let ver = 4

let v = ver ?? 10
v = null ?? 2 // db func
v = undefined ?? 12 ?? 23

// console.log(v)

// Ternary Operator

// condition ? true : false

v > 0 ? console.log("true") : console.log("false")
