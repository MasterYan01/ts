interface Apple {
  kind: 'apple',
  color: string
}
interface Banana {
  kind: 'banana',
  color: string
}
interface Orange {
  kind: 'orange',
  color: string
}
interface Other {
  kind:'other',
  x:number
}

type Fruits = Apple | Banana | Orange | Other

function getFruits(f: Fruits) {
  switch (f.kind) {
    case 'apple':
      return f.color
    case 'banana':
      return f.color
    case 'orange':
      return f.color
    default:
      throw new Error('fruits error')
  }
}
let f:Apple={
  kind:'apple',
  color:'red'
}
let res = getFruits(f)
console.log(res)