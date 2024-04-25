//查詢操作符 keyof T
interface Person {
  name: string,
  age: number
}
let k: keyof Person //'name'|'age'
k = 'age'

//訪問操作符 T[k]
let k2: Person['age']

//實際應用
let person1: Person = {
  name: 'tom',
  age: 35
}
function getValue(obj: any, keys: string[]) {
  return keys.map(key => obj[key])
}
let result = getValue(person1, ['name', ''])
console.log(result)

function getValue1<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
getValue1(person, ['career'])