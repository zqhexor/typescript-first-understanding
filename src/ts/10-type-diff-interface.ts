// 接口与类型别名的区别
/**
 * 1.基本写法:Objects/Functions
 */
// 接口
interface Point1 {
  x: number;
  y: number;
}

interface SetPoint1 {
  (x: number, y: number): void;
}
// 类型别名
type Point2 = {
  x: number;
  y: number;
};
type SetPoint2= (x: number, y: number) => void;

/**
 * 2.Other Types
 * 与接口类型不一样，类型别名可以用于一些其他类型，比如原始类型、联合类型和元组
 */
// primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

/**
 * 3.Extend
 * 接口和类型别名都能够被扩展，但语法有所不同。此外，接口和类型别名不是互斥的。接口可以扩展类型别名，而反过来是不行的。
 */
// Interface extends interface
interface PartialPointX1 { x: number; }
interface Point3 extends PartialPointX1 {
  y: number;
}

// Type alias extends type alias
type PartialPointX2 = { x: number; };
type Point4 = PartialPointX2 & { y: number; };

// Interface extends type alias
type PartialPointX3 = { x: number; };
interface Point5 extends PartialPointX3 {
  y: number;
}
let p5: Point5 = {
  x: 9,
  y: 6
}

// Type alias extends interface
interface PartialPointX4 { x: number; }
type Point6 = PartialPointX4 & { y: number; };
let p6: Point6 = {
  x: 9,
  y: 6
}

/**
 * 4.Implements
 * 类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型
 */
interface Point7 {
  x: number;
  y: number;
}

class SomePoint7 implements Point7 {
  x = 1;
  y = 2;
}

type Point8 = {
  x: number;
  y: number;
};

class SomePoint8 implements Point8 {
  x = 1;
  y = 2;
}

type PartialPoint5 = { x: number; } | { y: number; };

// A class can only implement an object type or
// intersection of object types with statically known members.
/*class SomePartialPoint implements PartialPoint5 {
  x = 1;
  y = 2;
}*/

/**
 * 5.Declaration merging
 * 与类型别名不同，接口可以定义多次，会被自动合并为单个接口。
 */
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 };
