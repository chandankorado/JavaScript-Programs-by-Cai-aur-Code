const nums = [1,2,3,4,5,6,7,8,9]

// forEach don't return 

const nu = nums.filter( (n) => n > 5)

// console.log(nums.filter( (n) => n > 5))

// console.log(nums.filter( (n) => {
//   return n > 5
// }))

// using forEach can also do with more LOC

// map

const nm = nums.map( (item) => item + 6)

// console.log(nums.map( (item) => item + 6))

// chaining

const chain =  nums
              .map( (item) => item * 10)
              .map( (item) => item + 1)
              .filter( (item) => item > 50)
// console.log(chain)

// Reducer

const nmm = [1,2,3,4,5]

// console.log(
//   nmm.reduce( (acc, currval) => {
//     return acc + currval
// },0)
// )

// console.log(
//   nmm.reduce( (acc, curr) => acc + curr , 0)
// )




// filter visits and  return only some which condition satisfy
// map visit all , do operation on all , and return
// reducer to calc sum easily

const cart = [
  {
    name:"shirt1",
    price:10
  },
  {
    name:"shirt2",
    price:20
  },
  {
    name:"shirt3",
    price:100
  }
]
console.log(
  cart.reduce( (sum, item) => sum + item.price ,0)
)