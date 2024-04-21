// forof map filter reduce

// ["","","",""]
// [{},{},{},{}]

// for of

const ar = [1,2,3] 
const st = "Chandan"

// for (const n of ar) {
//   console.log(n)
// }
// for (const i of st) {
//   console.log(i)
// }

// Map => key : value pairs ... no duplicate

const map = new Map()

// map.set(1,`a`)
// map.set(2,`b`)
// map.set(3,`c`)

map.set(1,`a`)
map.set(`a`,`b`)
map.set(3,`c`)
map.set(3,`c`)      // won't add again

// console.log(map)

// for (const key of map) {
//   console.log(key)
// }

// for (const [key, value] of map) {
//   console.log(key, `:-`,value)
// }

// for in

const obj = {
  'aa': 'an',
  'bb': 'an',
  'cc': 'an'
}

// for (const [key, value] of obj) {
//   console.log(key, `:-`,value)
// }    // object not iterable

// for (const key in obj){
//   console.log(key)
// }


// for (const key in obj){
//   console.log(obj[key])   // not work
// }

// for (const key in obj){
//   console.log(`${key} and ${obj[key]}`)
// }

const a = ["A","B","C","D"]

// for(const key in a){
//   console.log(key)    // numbers from 0 - by default
// }

// for (const key in a){
//   console.log(a[key])   // it work values
// }

// for (const key in map){
//   console.log(map[key])   // not iterable
// }       // won't print


// forEach

const coding = ["HTML","CSS","Java","JavaScript"]

// coding.forEach( (item) => {
//   console.log(item)
// })

// function printme(value){
//   console.log(value)
// }
// coding.forEach(printme)   // reference

// coding.forEach( (item, index, arr) => {
//   console.log(item, index, arr)
// })

const code = [
  {
    name:"A",
    num:1
  },{
    name:"B",
    num:2
  },{
    name:"C",
    num:3
  },{
    name:"D",
    num:4
  }
]

// code.forEach( (item) => {
//   console.log(item.name)
// })

// code.forEach( (item) => {
//   console.log(item.num*10)
// })

// code.forEach( (item) => {
//   console.log(item.num>2)
// })
