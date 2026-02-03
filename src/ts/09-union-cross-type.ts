// 联合类型与交叉类型
/**
 * 联合类型
 *  类型 A 和类型 B 联合后的类型是同时接受 A 和 B 值的类型，可以用来约束取值只能是某几个值中的一个
 *  类型别名用来给一个类型起个新名字
 */
function printMessage(msg: string | undefined): void {
  console.log(msg)
}

printMessage('good')
printMessage(undefined)

let number11: 1 | 2 = 1
// let number12: 1|2 =3  // error

// 类型别名用来给一个类型起个新名字
type Message = string | string[]

let greet = (message: Message) => {
  // ...
};

/**
 * 可辨识联合类型，也称为代数数据类型或标签联合类型。它包含 3 个要点：可辨识、联合类型和类型守卫。
 * 如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
 *  可辨识:可辨识要求联合类型中的每个元素都含有一个单例类型属性
 *  联合类型:
 *  类型守卫:
 */
interface Square {
  type: "square";
  size: number;
}

interface Rectangle {
  type: "rectangle";
  width: number;
  height: number;
}
// 这些接口中都包含一个 type 属性，该属性被称为可辨识的属性，而其它的属性只跟特性的接口相关。

// 定义联合类型
type MyShape = Square | Rectangle

// 使用 switch 和 case 运算符来实现类型守卫
function getArea(shape: MyShape) {
  switch (shape.type) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
  }
}

const myShape: MyShape = {type: "square", size: 9.5};
getArea(myShape);

/**
 * 交叉类型
 * 是将多个类型合并为一个类型。通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
 */
type Width = {
  x: number
}
type Rec = Width & { y: number }

let rec: Rec = {
  x: 9,
  y: 10
}
