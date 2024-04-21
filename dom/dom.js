// In Chrome console

// console.log(window.document)
// console.dir(document)         => document directories

// console.log(document)          //=> document HTML file

// document.baseURI
// document.links
// document.links[2]


// > HTML collection 
// > Node collection
// > Array


document.getElementById('title')

document.getElementById('title').id
document.getElementById('title').className

document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')

document.getElementById('title').setAttribute('class','test')
document.getElementById('title').setAttribute('class','test heading')


// css style inline
const title = document.getElementById('title')

title.style.backgroundColor = "red"
title.style.padding = '18px'
title.style.borderRadius = '15px'

// content inside that element

example:
 <h1 id="title" class="heading">Dom learning <span style="display: none;">text content</span></h1>


title.innerHTML     // all html values with tag
title.innerText      // only visible content
title.textContent   // all content display: none also


title.innerHTML   
// 'Dom learning <span style="display: none;">hidden content</span>'

title.textContent   
// 'Dom learning hidden content'

title.innerText    
// 'Dom learning'



document.querySelector('h2')
// return first single h2

document.querySelectorAll('h2')
// return all h2

// all selectors can be done how we select in css
document.querySelector('body')
document.querySelector('#title')
document.querySelector('.heading')

document.querySelector('input[type="password"]')
document.querySelector('h1:first-child')

// const parentEl = document.querySelector('body')
// const childs = parentEl.querySelector('.heading')
// const child  = parent.children[0]
//                parent.querySelector(':nth-child(3)')

// const element = document.querySelector('heading')
//                element.nextElementSibling
//                element.previousElementSibling

const parent = document.querySelector('ul')
const child = parent.querySelector('li')
// const children = parent.querySelectorAll('li')

child.style.backgroundColor = "red"

const next = child.nextElementSibling
const prev = child.previousElementSibling

next.style.backgroundColor = "green'"
// parent.children => HTMLCollection {li li li}

const collection = document.querySelectorAll('li')
// returns NodeList (li) not a array [no map, push func]
collection[0].style.backgroundColor = 'red'
// even single child have to use index

collection.forEach( (lis) => console.log(lis.innerHTML))

// collection.forEach( (lis) => {
//   lis.style.backgroundColor = 'red'
// })

const collect = document.getElementsByClassName('lists')
const arr = Array.from(collect)

arr.forEach( function(l){
  l.style.backgroundColor="red"     
  // arrow func not work in browser
})

arr.forEach( function(l){
  l.style.backgroundColor="blue"
  l.style.fontSize="25px"
})

