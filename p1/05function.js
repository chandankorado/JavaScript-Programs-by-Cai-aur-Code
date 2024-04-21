function sum(...num){
  return num
}
// console.log(sum(1,2,3,4,5))   // return array


const user = {
  username:"chandan",
  price:999,
  welcome : function(){
    console.log(`${this.username} welcome to website`)
    console.log(this)
  }
}
// console.log(user.welcome())

// user.welcome()
// user.username = "behenchod"
// user.welcome()

// console.log(this)

// function chai(){
//   let username = "bc"
//   // console.log(this.username)   // undefined
// }
// chai()

// Arrow func

// const summ = (n,m) =>{
//   return (n+m)    // [1,2]
// }
// const summ = (n,m) => (n+m)


// const summ = (n,m) => n+m

// const summ = (n,m) => (username: "chandan")

const summ = (n,m) => ({username: "chandan"})

// console.log(summ(1,2))

// const arr = [1,2,3,4,5]

// arr.forEach(function () {})

// arr.forEach(() => {})


// IIFE

// function connect(){
//   console.log(`DB CONNECTED`)
// }
// connect()

// (function connect(){
//   console.log(`DB CONNECTED`);
// })()
// this won't print

// named IIFE

(function connect(){
  console.log(`DB CONNECTED`);
})();

//()()
// immediate execution , global scope pollution
// end with semi-colon ;

// both run 
// ( () => {
//   console.log(`DB CONNECTED TWO`);
// })()

// ( () => {
//   console.log(`DB CONNECTED TWO`);
// })();

// unnamed IIFE

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})(`chandan`);