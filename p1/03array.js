let arr = [1,12,9,3,4,5,6]

// console.log(arr)
// console.log(arr.toLocaleString())

// console.log(arr.push(15,"7"))

// console.log(arr.pop())

console.log(arr.unshift(10,13))

// console.log(arr)

// console.log(arr.includes(15))
let newarr = arr.join()
// console.log(newarr)
// console.log(typeof newarr)    // string


// slice , splice
let arrr = [0,1,2,3,4,5,6]
// console.log(arrr)

const myn1 = arrr.slice(1,-3)
// console.log(`slice : ${myn1}`)

const myn2 = arrr.splice(1,3)   
// also remove from original array 
// console.log(`splice : ${myn2}`)

// concat , spread , flat **

let arr1 = [1,2,3,4,5]
let arr2 = [7,8,9]
let arr3 = [10,11,12]

// arr1.push(arr2)
// console.log(arr1)
// console.log(arr1[5])
// console.log(arr1[5][2])

// let newrr = arr1.concat(arr2)
let newrr = arr1.concat(arr2,arr3)

let sprd = [...arr1, ...arr2, ...arr3]

// console.log(`concat: ${newrr}`)
// console.log(`spread: ${sprd}`)


const depth = [12,3,4,[5,6,[7,8,[9],[10,11],[12,13]]],[14,15]]

// const flt = depth.flat(1)
// const flt = depth.flat(2)

const flt = depth.flat(Infinity)

// console.log(flt)


// from array

let str = "chandan"
let str2 = "chandan1"
let n = '4567'

let obj ={
  "name":"chandan",
  "id":180840
}

// console.log(Array.isArray(str))

// console.log(Array.from(str))
// console.log(Array.from(str,str2))    // error



// console.log(Array.from(n))    // empty array

// console.log(Array.from(obj))    // empty array

// give entries : keys | values 

let a = 10
let b = 20
let c = 30
let d

// let nar = Array.of(a,b,c,d)
// console.log(nar[4])
// console.log(Array.of(a,b,c,d))
// console.log(Array.of(a,b,c,d,str))

// console.log(Array.of(a,b,c,d,str,obj,arr))



