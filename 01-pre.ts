//ts筆記

//npm i -g typescript
//tsc --init
//tsc --watch

//string
let pname: string = 'tom'
let nameStr: string = `姓名${pname}`
pname = 'jay'
//number

let fruits: string[] = ['apple', 'orange', 'banana']
fruits.push('lemon')

let turple: [string, number, boolean] = ['abc', 123, true]
function add(x: number, y: string, z: boolean) {
  console.log(x, y, z)
}
add(1, 'abc', true)

function add1(x: number, y: number): number {
  return x + y
}
let add2 = (x: number, y: number): number => {
  return x + y
}
//公式:變量名:類型 = 賦值
let add3: (x: number, y: number) => number //函數類型
add3 = add2
function person(name: string, age: number, career?: string) {
  console.log(`姓名${name}年齡${age}職業${career ? career : '無業'}`)
}
person('ethan', 35, 'cooker')

//類比 電腦的接口 type-c
interface personWoman {
  name: string,
  age: number,
  sex: string,
  career: string
}
// type-c線
const obj: personWoman = {
  name: 'jack',
  age: 25,
  career: 'coder',
  sex: 'female'
}

interface personMan {
  readonly name: string,
  age: number,
  sex: string,
  career?: string
}

const personMan = {
  name: 'ethan',
  age: 34,
  sex: 'man',
}
//personMan.name = 123' 只讀不能修改屬性
interface RandomIntroduce {
  name: string,
  age: number,
  [proName: string]: string | number | undefined
}
const boy: RandomIntroduce = {
  name: 'sb',
  age: 35,
  fan: 'play'
}
//基本寫法(封裝)
// class Animal {
//   name: string
//   constructor(name: string) {
//     this.name = name
//   }
//   eat() { }
//   speak() { }
// }
// //多態
// class Dog extends Animal {
//   speak(): void {
//     console.log(this.name + '旺旺~~')
//   }
//   eat(): void {
//     console.log('吃肉~~')
//   }
// }
// const dog1: Animal = new Dog('tom')
// dog1.eat()

// class Cook {
//   step1() {
//     console.log('1')
//     return this
//   }
//   step2() {
//     console.log('2')
//     return this
//   }
//   step3() {
//     console.log('3')
//     return this
//   }
//   step4() {
//     console.log('4')
//     return this
//   }
// }

// const mycook = new Cook
// // mycook.step1().step2().step3().step4()
// console.log(mycook.step1().step2().step3().step4())