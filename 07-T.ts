//<T>
//泛型:使用的時候才能確定類型,所以最開始可以用占位符 比如"T" 來占位
//函數重載
// function print(arg: string): string
// function print(arg: number): number
// function print(arg: number | string): number | string {
//   console.log(arg)
//   return arg
// }
// function print_T<T>(arg: T): T {
//   console.log(arg)
//   return arg
// }
// // print_T<string>('123')
// // print_T<number>(999)

// //泛型約束接口
// interface Ilength {
//   length: number
// }
// function logLength<T extends Ilength>(arg: T): T {
//   //console.log(arg)
//   return arg
// }
// logLength('123456')
// const a = logLength(['1', '2', '3'])
// console.log(a.length)

// //類型推斷
// let e = (x = 1) => x + 1

// //類型斷言
// const box = document.getElementById('img') as HTMLImageElement
// box.src=''

//typeof
// function handle(idCard: string | number) {
//   if (typeof idCard === 'string') {
//     return idCard.length
//   } else {
//     return idCard.toFixed(2)
//   }
// }
//console.log(handle(123))


//instanceof
class Cat {
  helloCat() { console.log('hello Cat') }
}
class Puppy {
  helloPuppy() { console.log('hello Puppy') }
}
function helloAnimal(pet: any) {
  if (pet instanceof Cat) {
    pet.helloCat()
  } else if (pet instanceof Puppy) {
    pet.helloPuppy()
  } else {
    console.log('hello animal')
  }
}
//helloAnimal(new Cat())

//in
type Animal = Cat | Puppy

function getPet(pet: Animal) {
  if ('helloCat' in pet) {
    pet.helloCat()
  } else {
    pet.helloPuppy()
  }
}
getPet(new Puppy())

function isCat(pet:Animal):pet is Cat{
  return (pet as Cat).helloCat !== undefined
}

function getPet1(pet:Animal){
  if(isCat(pet)){
    pet.helloCat()
  }else{
    pet.helloPuppy()
  }
}