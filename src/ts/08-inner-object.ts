// 内置对象
let b:Boolean = new Boolean(1)
let num:Number = new Number(1)
let s:String = new String('string')
let d:Date = new Date()
let r:RegExp = new RegExp('^1')
let e:Error = new Error('error message')

console.log(b, num, s, d, r, e)

b = true
console.log(b)

// Dom对象
const div:HTMLElement = document.getElementById('test')! // 非空断言
const divs:NodeList = document.querySelectorAll('div')
document.addEventListener('click',(e:MouseEvent)=> {
  console.log(e.target)
})
const documentFragment:DocumentFragment = document.createDocumentFragment()
