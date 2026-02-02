// 变量类型
/**
 * Number类型可以是NaN、Infinity
 * 注意严格模式下 Number、Boolean、String类型不能是null、undefined，非严格模式下可以
 */
let binaryLiteral: number = 0b1010 // 二进制
let octalLiteral: number = 0o744    // 八进制
let decLiteral: number = 6   // 十进制
let hexLiteral: number = 0xf00d    // 十六进制
console.log(binaryLiteral, octalLiteral, decLiteral, hexLiteral)
let number1: number = NaN
let number2: number = -Infinity
console.log(number1, number2)

let sname: string = 'Hexor'
let age: number = 18
let flag: boolean = true
let words: string = `我是 ${sname} ，今年 ${age + 1} 岁，性别是${flag ? '男' : '女'}`
console.log(words)

/**
 * void类型严格模式下只能是undefined，非严格模式下可以是null
 */
let unusable: void = undefined;
let u: undefined = undefined;
let n: null = null;


/**
 * Symbol类型
 *  需要把target的标准库改为ES2015，或者把lib改为["ES2015","dom"]
 */
const sym = Symbol();
let person = {
  [sym]: "Hexor",
};
console.log(person[sym]); // Hexor

/**
 * object类型
 *  表示任何非原始类型
 *  包含： 对象、数组、函数、集合（Map/Set）等
 *  不包含： number, string, boolean, symbol, null, undefined
 */
const fun: object = function () {

}

/**
 * Object
 *  描述的是 JavaScript 中所有拥有原型链属性的值
 *  包含： 几乎所有值（除了 null 和 undefined）
 */
const Object1: Object = 1;
const Object2: Object = sym;
const Object3: Object = [1];
// const Object4: Object = undefined;  // Error

const obj: { name: string, age: number } = {
  name: '小明',
  age: 23
}

/**
 * 数组类型
 */
// 在元素类型后面加上[]
let arr1: number[] = [1, 2];
// 或者使用数组泛型
let arr2: Array<number> = [1, 2];
const sum = function (...args: number[]): number {
  return args.reduce((total, current) => total + current, 0)
}
console.log(sum(...arr1))
/**
 * 只读数组
 */
let arr3: ReadonlyArray<number> = [1, 2];
// arr3[0] = 5 // error
// arr3.push(5) // error

/**
 * 元组类型
 */
let tuple: [string, number];
tuple = ['Runoob', 1];    // 运行正常

/**
 * 枚举类型
 * 数字枚举具有反向映射，默认从 0 开始递增
 * 字符串枚举没有反向映射
 */
enum Color {Red, Green = 1, Blue}

let c: Color = Color.Green
console.log(c)    // 输出 1

enum Fruit {Apple = 2, Pear, Peach = 5}

let f: string = Fruit[3]
console.log(f);    // 输出 Pear

// 常用枚举写法
const Direction = {
  Up: 0,
  Down: 1,
} as const; // 锁定字面量类型

// 获取值的联合类型 (0 | 1)
type Direction = (typeof Direction)[keyof typeof Direction];

function move(dir: Direction) {
  // dir 只能是 0 或 1
}

move(Direction.Up); // OK

/**
 * 函数类型
 * 调用的实参个数和形参个数必须一致，否则得用可选参数或默认参数
 */
// 函数声明的方式
function func1(a: number, b?: number, ...rest: number[]): string {
  return 'func1'
}

let answer1: string = func1(10)
let answer2: string = func1(10, 100)
let answer3: string = func1(10, 100, 1000)
// 函数表达式
const func2: (a: number, b: number) => string = function (a: number, b: number): string {
  return 'func1'
}
let answer4: string = func2(10, 100)

/**
 * any类型 和 unknown类型
 * 所有类型都可以赋值给 any类型和unknown类型
 * unknown 类型只能被赋值给 any 类型和 unknown 类型本身
 * 将 value 变量类型设置为 unknown 后，这些操作都不再被认为是类型正确的
 */
let value1: any = '123'
let value2: unknown = '234'
let value3: string = value1
// let value4: string = value2 // Error
console.log(value3)
value1.trim()
// value2.trim() // Error

/**
 * 隐式类型推断
 */
let weight = 60
// weight = 'string' // Error

/**
 * 类型断言
 * <类型>值 或 值 as 类型
 */
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
strLength = (someValue as string).length

// 启用 --strictNullChecks
let x: number | null | undefined
x = 1; // 运行正确
x = undefined   // 运行正确
x = null    // 运行正确

/**
 * 非空断言
 * 值!
 */
function myFunc(maybeString: string | undefined | null) {
  // Type 'string | null | undefined' is not assignable to type 'string'.
  // Type 'undefined' is not assignable to type 'string'.
  // const onlyString: string = maybeString; // Error
  const ignoreUndefinedAndNull: string = maybeString!; // Ok
  console.log(ignoreUndefinedAndNull)
}
myFunc('abc')
myFunc(undefined)

/**
 * 确定赋值断言
 * 在 TypeScript 2.7 版本中引入了确定赋值断言，
 * 即允许在实例属性和变量声明后面放置一个 ! 号，从而告诉 TypeScript 该属性会被明确地赋值
 */
let numberAb!: number // 确定赋值断言
initialize()
console.log(2 * numberAb) // 如果没有确定赋值断言，会Error
function initialize() {
  numberAb = 10
}
