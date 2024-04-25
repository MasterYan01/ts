interface Person {
  name: string,
  age: number
}
interface Person_Partial {
  name?: string,
  age?: number
}

interface Person_Readyonly {
  readonly name: string,
  readonly age: number
}

type Person_Readonly_type<T> = {
  readonly [P in keyof T]: T[P]
  //readonly name:string
}

type Person_Partial_type<T> = {
  [P in keyof T]?: T[P]
}
//Readonly
type P1 = Readonly<Person>
//Partial
type P2 = Partial<Person>
//Pick
type P3 = Pick<Person, 'name'>
//Record
type P4 = Record<'bj' | 'sh', { pointX: number, pointY: number }>
