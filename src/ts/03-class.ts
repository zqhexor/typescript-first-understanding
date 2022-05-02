// 类
class Animal {
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

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
    console.log(this.gender)
  }
}

class Dog extends Animal {
  // 不能被外部访问的构造函数
  private constructor(name: string, age: number) {
    super(name, age)
  }

  static create(name: string, age: number) {
    return new Dog(name, age)
  }
}

const animal: Animal = new Animal('Cat', 3)
console.log(animal.name)
// console.log(cat.age) // error
animal.sayHi('Nice!')
animal.aboutMe()

new Cat('加菲猫',4)

Dog.create('拉布拉多', 2)
