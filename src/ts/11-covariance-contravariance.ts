/* 
  协变与逆变
  1.协变（返回值/数组/对象）：越具体的（子类）越能给不具体的（父类）。
    “我给你的一定比你要的多。” (如果你要动物，我给你猫)
  2.逆变（函数参数）：越不具体的（父类）越能给具体的（子类）。 
    “我能处理的一定比你传进来的多。” (如果你传个 iPhone 进来，我连电脑都能修，修你个 iPhone 绰绰有余)
*/

// 1.协变（返回值）
type Getter<T> = () => T;
interface Animal {
  name: string;
}

interface Cat extends Animal {
  sayHi: () => void;
}

let getCat: Getter<Cat> = () => ({ name:'加菲猫', sayHi: () => console.log('Hi, I\'m a cat.') });
let getAnimal: Getter<Animal> = getCat; // OK (协变)

// 2.协变（数组）
let myCats: Cat[] = [];
let myAnimals: Animal[] = myCats; // OK (协变)

// 3.协变（对象）
let myCat: Cat = getCat();
let myAnimal: Animal = myCat; // OK (协变)

// 4.逆变（函数参数）:当你把一个函数赋值给另一个函数变量时
interface Device { name: string }
interface IPhone extends Device { call: () => void } // iPhone 比 Device 更具体

type RepairIPhoneFunc = (p: IPhone) => void; // 专门修 iPhone 的工位
type RepairDeviceFunc = (d: Device) => void; // 能修任何设备的工位

let repairDevice: RepairDeviceFunc = (d) => console.log(d.name);
let repairIPhone: RepairIPhoneFunc = (p) => p.call();

let worker: RepairIPhoneFunc = repairDevice // OK (逆变)
