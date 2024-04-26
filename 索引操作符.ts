//查詢操作符 keyof T
// interface Person {
//   name: string,
//   age: number
// }
// let k: keyof Person //'name'|'age'
// k = 'age'

// //訪問操作符 T[k]
// let k2: Person['age']

// //實際應用
// let person1: Person = {
//   name: 'tom',
//   age: 35
// }
// function getValue(obj: any, keys: string[]) {
//   return keys.map(key => obj[key])
// }
// let result = getValue(person1, ['name', ''])
// console.log(result)

// function getValue1<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
//   return keys.map(key => obj[key])
// }
//getValue1(person, ['career'])

// enum Color {
//   Red,
//   Green,
//   Blue='藍色',
// }
// enum Color2 {
//   Red,
//   Green,
//   Blue='藍色',
//   Purple='紫色'
// }
// let phone: { name: string, price: number, color: Color2 }
// phone ={name:'sb',price:999,color:Color2.Green}
// console.log(phone)

// enum Gender {
//   Male,
//   Female
// }
// type Grade = 1|2|3|null
// type Learn = {
//   name:string,
//   age:number
//   gender:Gender
//   grade:Grade
// }
// let eng:Learn
// eng={name:'ethan',age:35,gender:Gender.Male,grade:null}

// class Person {
//   name:string
//   age:number
//   constructor(name:string,age:number){
//     this.name=name
//     this.age=age
//   }
// }
// const p1 = new Person('ethan',35)
// const p2 = new Person('enson',20)
// console.log(p1)
// console.log(p2)

// class Person {}

// class Teacher1 extends Person {}
// class Student1 extends Person {}
// const p1= new Person('jay',35)

// const t1= new Teacher1('ethan',36)
// const s1= new Student1('amy',30)

// interface Person {
//   name: string,
//   age: number,
//   speak(): void
// }
// class Ethan implements Person {
//   name: string
//   age: number
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
//   speak() {
//     console.log('speak')
//   }
// }

interface PersonInter {
  name: string
  age: number
}
interface PersonInter {
  speak(): void
}
class Ethan implements PersonInter {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  speak() {
    console.log('speak')
  }
}
let PersonInter: PersonInter = {
  name: 'ethan',
  age: 35,
  speak() {
    console.log('first')
  }
}

function test<T>(arg: T): T {
  return arg
}
test(10)
test<number>(10)
function test1<T, K>(a: T, b: K): K {
  return b
}
test1<number, string>(10, 'hello')

interface Demo {
  length: number
}
function test3<T extends Demo>(arg: T): number {
  return arg.length
}

console.log(test3({ name: '123', length: 99 }))
