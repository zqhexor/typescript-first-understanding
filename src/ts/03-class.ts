// 类
class Bear {
  // 类的成员属性必须赋初始值，要么在此赋值，要么在构造函数内
  name: string
  // 私有变量只有类的内部能访问
  private age: number
  // 受保护的变量不能被外部访问，能够被子类访问
  protected readonly gender: boolean

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }
  aboutMe(): void {
    console.log(`Hi,我是${this.name},今年${this.age}岁`)
  }
  sayHi(msg: string): void {
    console.log(`Hi`, msg)
  }

}

class Panda extends Bear {
  constructor(name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }
}

class Koala extends Bear {
  // 不能被外部访问的构造函数
  private constructor(name: string, age: number) {
    super(name, age)
  }

  static create(name: string, age: number) {
    return new Koala(name, age)
  }
}

const bear: Bear = new Bear('李明', 3)
console.log(bear.name)
// console.log(cat.age) // error
bear.sayHi('Nice!')
bear.aboutMe()

new Panda('京京',4)

Koala.create('奥古斯塔', 2)
