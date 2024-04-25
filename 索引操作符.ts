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
let result = getValue(person1, ['name', 'age'])
console.log(result)
