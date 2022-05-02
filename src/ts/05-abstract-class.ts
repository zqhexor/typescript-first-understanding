/**
 * 抽象类：只能被继承
 * 抽象方法： 必须重写
 */
abstract class Shape {
  color: string = 'white'

  fillColor(color: string): void {
    this.color = color
  }

  abstract getArea(): number
}

class Rectangle extends Shape {
  width: number
  height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }

  getArea(): number {
    return this.width * this.height
  }
}

const rect:Rectangle = new Rectangle(10,5)
console.log(rect.getArea())
console.log(rect.color)
rect.fillColor('red')
console.log(rect.color)
