// 类型声明
/**
 * 一般自带类型声明模块，如'query-string'；
 * 否则，则安装类型声明模块，如'lodash'，需安装"npm install @type/lodash --dev"
 * 否则，用declare
 * declare 的作用是：“告诉编译器，某个东西已经存在了，你别报错，直接去用就行，不需要你把它编译成 JS。”
 * declare 块中定义的任何内容都属于“环境上下文”，这里有几个硬核规则：
 *    1.没有实现：你不能在 declare 的函数或类里写逻辑，否则会报错。
 *    2.默认导出：在 declare module 内部，很多时候你会看到 export，这只是为了模拟模块化导入的结构。
 *    3.全局污染：如果你在 .ts 文件（而不是 .d.ts）里写 declare global，可以给全局对象（比如 Window 或 Array）增加新的方法。
 */
import dayjs from 'dayjs'
// import * as dayjs from 'dayjs'
console.log(dayjs)

declare function add(x: number): number
