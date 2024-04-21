let sym = Symbol("key1")
const user = {
  name:"chandan",
  "last name":"korado",
  age:22,
  email:"chanda@gmail.com",
  phone:1234567890,
  [sym]:"sym1"
}


// console.log(user.name)
// console.log(user['age'])

// console.log(user["last name"])
// console.log(user[sym])    

// console.log(typeof user.sym)    
// type: string ( ! symbol)
// Object.freeze(user)    // changes won't effect

user.age = 20
// console.log(user['age'])

user.func = function(){
  console.log(`function called and ${this.age}`)
}

// console.log(user.func)
// console.log(user.func()) 

// singleTon Object
const uer = new Object()

// console.log(uer)

// const uer = {}

uer.name = "loveday"
uer.age = 22

const regUsr = {
  name:"Bc",
  email:"w@.com",
  fullname:{
    first:"BEHRE",
    last:"kord",
    title:{
      a:"Mr",
      b:"kumar"
    }
  },
  ph:79
}

// console.log(regUsr.fullname?.title.a)
// ? => if exist


// Object.assign(target{},Sources,...)

const obj1 = {
  a:1,
  b:2
}
const obj2 = {
  c:3,
  d:4
}

const obj3 = {obj1,obj2}
// console.log(obj3)

Object.assign(obj1, obj2)

// console.log(obj1)


// const obj4 = Object.assign(obj1, obj2)
const obj4 = Object.assign({},obj1, obj2)
// console.log(obj4)

const obj5 = {...obj1, ...obj2}
// console.log(obj5)

// Array Object

const arObj = [
  {
    id:0,
    name:"A"
  },
  {
    id:1,
    name:"B"
  }
]

// console.log(arObj[1])
// console.log(arObj[1].name)

// console.log(Object.keys(regUsr))
// console.log(Object.values(regUsr))
// console.log(Object.entries(regUsr))

// console.log(regUsr.hasOwnProperty('name'))
// console.log(regUsr.hasOwnProperty('lastname'))


const course = {
  coursename: "javascript react express",
  price:"900",
  courseInstructor:"Behenchod"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(instructor)

// const navbar = (company) =>{

// }
// navbar(company= "behen")

// Object

// {
//   name:"chandan",
//   id:12,
//   price:"free"
// }

// API Responses

// JSON

// {
//   "name":"chandan",
//   "id":12,
//   "price":"free"
// }

// Array of objects

[
  {},
  {},
  {}
]