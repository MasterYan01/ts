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
let add3:(x:number,y:number)=>number //函數類型
add3=add2