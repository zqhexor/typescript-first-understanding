/**
 * 内置对象
 * 内置对象 (Built-in Objects) 就是 TypeScript 预先为你声明好的那部分“外部世界
 * 1.ECMAScript 标准对象
 *  这些是 JavaScript 语言核心的对象。无论你在浏览器还是 Node.js 环境下，它们都存在。
 *  - 基础类型包装对象：Boolean, Number, String, Object, Array
 *  - 工具类对象：Date, RegExp, Error, Math, JSON
 *  - 高级数据结构：Map, Set, WeakMap, Promise, Proxy
 * 2. DOM 和 BOM 对象 (浏览器环境)
 *  - 核心类型：Document, HTMLElement, Event, NodeList
 *  - 特定元素：HTMLDivElement, HTMLCanvasElement, HTMLInputElement
 *  - 浏览器 API：Window, History, Location, Storage (localStorage)
 * 3. TypeScript 特有的类型库控制
 *  内置声明是就在你的 node_modules/typescript/lib 文件夹里，文件名通常是 lib.es5.d.ts, lib.dom.d.ts 等
 *  你可以通过 tsconfig.json 中的 lib 选项来决定包含哪些内置对象
 * {
      "compilerOptions": {
        "target": "ES6",
        "lib": ["ESNext", "DOM", "DOM.Iterable"] 
      }
    }
 * 
 */

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
