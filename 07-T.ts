//<T>
//泛型:使用的時候才能確定類型,所以最開始可以用占位符 比如"T" 來占位
//函數重載
function print(arg: string): string
function print(arg: number): number
function print(arg: number | string): number | string {
  console.log(arg)
  return arg
}
function print_T<T>(arg: T): T {
  console.log(arg)
  return arg
}
// print_T<string>('123')
// print_T<number>(999)

//泛型約束接口
interface Ilength {
  length: number
}
function logLength<T extends Ilength>(arg: T): T {
  //console.log(arg)
  return arg
}
logLength('123456')
const a = logLength(['1', '2', '3'])
console.log(a.length)

//類型推斷
let e = (x = 1) => x + 1

//類型斷言
const box = document.getElementById('img') as HTMLImageElement
box.src=''