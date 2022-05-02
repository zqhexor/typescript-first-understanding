// 泛型
/**
 * 泛型基础
 */
function creatArray<T>(length: number, value: T): T[] {
  return Array<T>(length).fill(value)
}

console.log(creatArray(3, 8))
console.log(creatArray(3, 'sb'))

/**
 * 多个泛型参数的函数
 */
function getMsg<K, V>(value1: K, value2: V): [K, V] {
  return [value1, value2]
}

console.log(getMsg<number, string>(2, 'good'))

/**
 * 泛型接口
 */
// 定义一个用户信息类
class User {
  id?: number
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

// 定义一个泛型接口
interface IBaseCRUD<T> {
  data: T[]
  add: (t: T) => number
  getUserById: (id: number) => T
}

// 定义一个类，可以针对用户信息进行操作
class UserCRUD implements IBaseCRUD<User> {
  data: User[] = []

  // 新增
  add(user: User): number {
    user.id = Date.now() + Math.random()
    this.data.push(user)
    return user.id
  }

  // 查询
  getUserById(id: number): User {
    return this.data.find(user => user.id === id)! // 非空断言
  }
}

const userCRUD: UserCRUD = new UserCRUD()
userCRUD.add(new User('Jack', 20))
const userId: number = userCRUD.add(new User('Tom', 24))
userCRUD.add(new User('Lucy', 22))

console.log(userCRUD)
const user: User = userCRUD.getUserById(userId)
console.log(user)

/**
 * 泛型约束
 */
// 定义一个接口，用来约束将来的某个类型中必须要有length这个属性
interface ILength {
  length: number
}

function getLength<T extends ILength>(t: T): number {
  return t.length
}

console.log(getLength<string>('what are you doing'))

// console.log(getLength<number>(3)) // error

/**
 * 泛型工具类
 * 1.typeof 操作符可以用来获取一个变量声明或对象的类型
 * 2.keyof 操作符是在 TypeScript 2.1 版本引入的，该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
 * 3.in 用来遍历枚举类型
 * 4.在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用以及ReturnType<T>
 * 5.Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?
 */
// 1.typeof
interface Person {
  name: string;
  age: number;
}

const sem: Person = {name: 'semlinker', age: 33};
type Sem = typeof sem; // -> Person

function toArray(x: number): Array<number> {
  return [x];
}

type Func = typeof toArray; // -> (x: number) => number[]

// 2.keyof
interface Person1 {
  name: string;
  age: number;
}

type K1 = keyof Person1; // "name" | "age"
type K2 = keyof Person1[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type K3 = keyof { [x: string]: string };  // string | number
let k1: K1 = "name"
let k2: K2 = "toString"
let k3: K3 = 5

// 3.in
type Keys = "a" | "b" | "c"

type KeysObj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }
let keysObj: KeysObj = {
  a: 1,
  b: 2,
  c: 4
}

// infer
// 内置函数ReturnType获取返回值的类型，实现就用到了infer
/*
  type ReturnType<T> = T extends (
      ...args: any[]
  ) => infer R ? R : any;
*/

let returnType1:ReturnType<()=>number> = 2
// let returnType2:ReturnType<string> = 2

// 5.Partial
// Partial实现如下
/*type Partial<T> = {
  [P in keyof T]?: T[P];
};*/

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "Learn TS",
  description: "Learn TypeScript",
};

const todo2 = updateTodo(todo1, {
  description: "Learn TypeScript Enum",
});
